import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  AsyncStorage,
  Easing,
  ScrollView,
  TextInput,
  StyleSheet,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconI from "react-native-vector-icons/Ionicons";
import IconM from "react-native-vector-icons//MaterialIcons";
import IconMC from "react-native-vector-icons//MaterialCommunityIcons";
import { colors } from "react-native-elements";
import { ImagePicker, Permissions } from "expo";
import resources  from '../../lib/resources'
import store from '../../data_Container/store'

import lib from '../../lib/lib';
import VehicleType from './VehicleType';
import { baseUrl, apiUrl } from '../../lib/resources'

const data = new FormData();

export default class DocumentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'car',
      showVehicles: false,
      profilePicture: null,
      license: null,
      vehicleRegistration: null
    };
    this._pickImage = this._pickImage.bind(this);
    this._runCamera = this._runCamera.bind(this);
    this.signOut = this.signOut.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
    this.showVehicles = this.showVehicles.bind(this);
    this.continue = this.continue.bind(this);
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { status_roll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === "granted", hasCameraRollPermission: status_roll === "granted"});
  }

  continue() {
    const { uid } = this.props.screenProps.user.user;
    const { selected, showVehicles, vehicleRegistration, license, profilePicture } = this.state;
    let details = {};
    
    if (!profilePicture) {
      alert('Your profile picture is required!')
      return
    }
    if (!license) {
      alert('Your drivers license must be uploaded!')
      return
    }
    if (selected==='car') {
      if (!vehicleRegistration) {
        alert('Vehicle Registration must be uploaded!')
        return
      }
      details = {
        vehicleType: selected,
        vehiclePapers: vehicleRegistration,
        vehicleLicense: license,
        profilePicture,
      }
    }
    if (selected === 'bike' || selected === 'bicycle') {
      details = {
        vehicleType: selected,
        vehicleLicense: license,
        profilePicture,
      }
    }
    lib.upload(details, uid)
  }

  _pickImage = async (item) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [9, 16],
      base64: true
    });


    if (!result.cancelled) {
      let base64Img = `data:image/jpg;base64,${result.base64}`
      const { uri, height, width } = result;
  
      let data = {
        "file": base64Img,
        "upload_preset": "bukka123",
      }

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      })
      .then(res=> res.json())
      .then((result) => {
        if(result.secure_url !== '') {
          this.setState({ [item]: result.secure_url});
        }
      })
      .catch(err=> alert('Could not upload. Please try again later!'))
    }
  };

  _runCamera = async () => {
    let result = ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
  };

  signOut() {
    lib.signOut();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.screenProps.user.isAuthenticated){
      this.props.navigation.navigate('AuthLoading')
    }
    if (nextProps.screenProps.user.files_upload) {
      AsyncStorage.setItem('verification', 'inprogress')
      this.props.navigation.navigate('pendingAproval')
    }
  }


  showVehicles() {
    this.setState({ showVehicles: !this.state.showVehicles })
  }

  selectVehicle(selected) {
    this.setState({ selected })
  }

  render() {
    // console.log('yesss', this.props.user)
    const { selected, showVehicles, vehicleRegistration, license, profilePicture } = this.state;
    const display = showVehicles ? 'flex' : 'none';
    const showVehicleReg = selected === 'car' ? 'flex' : 'none';
    return (<View style={[
        styles.container
      ]}>
        <View style={{backgroundColor: "grey", width: "100%", height: 50}}/>
        <View style={[
          styles.header
        ]}>
          <TouchableOpacity 
          style={[styles.signout]}
          onPress={this.signOut}
          activeOpacity={0.5}
          >
            <Text style={
            {
              color: "#4ca9e8"
            }}>
              SIGNOUT
            </Text>
          </TouchableOpacity>
          <Text style={{
            color: "white",
            fontSize: 20
          }}>
            DOCUMENTS
          </Text>
        </View>
        <View style={[
          styles.content
        ]}>
          <View style={[ styles.tab, {
            backgroundColor: "#EFEFF4"
          }]} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={[ styles.tab, styles.tab1]}>
            <Text style={{
              fontSize: 20
            }} >Vehicle type</Text>
            <Icon
              name={showVehicles ? "chevron-up" : "chevron-down"}
              size={30}
              color={colors.grey3}
              onPress={this.showVehicles}
            />
          </TouchableOpacity>
          <View style={[styles.vehicleType, { display }]}>
            <VehicleType
              text="Car"
              name={selected === 'car' ? 'radio-button-checked': 'radio-button-unchecked'}
              onPress={() => this.selectVehicle('car')}
            />
            <VehicleType
              text="MotorBike"
              name={selected === 'bike' ? 'radio-button-checked': 'radio-button-unchecked'}
              marginTop={10}
              onPress={() => this.selectVehicle('bike')}
            />
            <VehicleType
              text="Bicycle"
              name={selected === 'bicycle' ? 'radio-button-checked': 'radio-button-unchecked'}
              marginTop={10}
              onPress={() => this.selectVehicle('bicycle')}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[ styles.tab, styles.tab1]}>
            <Text style={{
              fontSize: 20
            }} >Profile picture</Text>
            <View style={[styles.contentLeft]}>
              <IconI
                style={[styles.marker, { display: profilePicture ? 'flex' : 'none'}]}
                name="md-checkmark"
                size={30}
                color={'green'}
                onPress={() => this._pickImage('profilePicture')}
              />
              <Icon
                name="upload"
                size={30}
                color={colors.grey3}
                onPress={() => this._pickImage('profilePicture')}
              />
            </View>
          </TouchableOpacity>
          <View style={[ styles.tab, {
            backgroundColor: "#EFEFF4",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "auto"
          }]}>
            <Text style={{
              color: colors.grey2,
              fontSize: 18
            }} >
              Please upload your vehicle documents.
            </Text>
            <Text style={{
              color: colors.grey2,
              fontSize: 16,
              marginTop: 20
            }} >
              To ride for Bukka, your vehicle must be well maintained and must have complete and valid documents.
            </Text>

          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[ styles.tab, styles.tab1]}>
            <Text style={{
              fontSize: 20
            }} >Drivers License</Text>
            <View style={[styles.contentLeft]}>
              <IconI
                style={[styles.marker, { display: license ? 'flex' : 'none'}]}
                name="md-checkmark"
                size={30}
                color={'green'}
                onPress={() => this._pickImage('profilePicture')}
              />
              <Icon
                name="upload"
                size={30}
                color={colors.grey3}
                onPress={() => this._pickImage('license')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[ styles.tab, styles.tab1, { display: showVehicleReg }]}>
            <Text style={{
              fontSize: 20
            }} >Vehicle registration</Text>
            <View style={[styles.contentLeft]}>
              <IconI
                style={[styles.marker, { display: vehicleRegistration ? 'flex' : 'none'}]}
                name="md-checkmark"
                size={30}
                color={'green'}
                onPress={() => this._pickImage('profilePicture')}
              />
              <Icon
                name="upload"
                size={30}
                color={colors.grey3}
                onPress={() => this._pickImage('vehicleRegistration')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.continue
          ]}
          onPress={this.continue}
        >
          <Text style={{
            fontSize: 25,
            color: "white",
            fontWeight: "bold"
          }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})


const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header:{
    width: "100%",
    height: 60,
    backgroundColor: "black",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "100%",
    flex: 1,
  },
  continue: {
    width: "100%",
    padding: 10,
    height: "auto",
    backgroundColor: "#1EBAD8",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 20,
    borderColor: "white",
  },
  signout: {
    position: "absolute",
    height: 60,
    left: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  tab1: {
    backgroundColor: colors.white,
    justifyContent: "space-between",
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20
  },
  vehicleType: {
    padding: 20,
    justifyContent: 'space-between',
  },
  contentLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  marker: {
    marginRight: 20
  }
});

styles.tab = styles.header


// export default connect(mapStateToProps)(DocumentUpload)