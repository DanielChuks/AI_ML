import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import { Permissions } from "expo";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles, { colors } from "../../styles/style";
import Button from "../others/Button";
import rsc from "../../lib/resources";
import Img from "../others/Images";
import Imagepicker from "../others/Imageandvideopicker";
import Camera from "../others/camera";


export default class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.uploadLicense = this.uploadLicense.bind(this);
    this.uploadVehicleReg = this.uploadVehicleReg.bind(this);
  }

  uploadLicense() {
    this.props.navigation.navigate('imageandvideo', {documentType: 'DRIVERS LICENSE'})
  }

  uploadVehicleReg() {
    this.props.navigation.navigate('imageandvideo', {documentType: 'VEHICLE REGISTRATION'})
  }

  render() {
    console.log(this.props.navigation.state.params)
    let { image } = this.state;
    return (
      <View
        style={[
          {
            backgroundColor: colors.aa,
            flex: 1,
            alignItems: "center",
            justifyContent: 'flex-start'
          }
        ]}
      >
        <View style={{backgroundColor: "grey", width: "100%", height: 25}}/>
        <View style={{ marginTop: 20}}>
          <Img
            source={{ uri: rsc.logo }}
            style={[{ width: 160, height: 60}]}
          />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontFamily: "Comfortaa-Bold",
                fontSize: 18
              }}
            >
              DRIVER
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 150 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Comfortaa-Bold",
              fontSize: 18,
              textDecorationLine: 'underline',
              textDecorationStyle: 'double'
            }}
          >
            DOCUMENTS
          </Text>
          <TouchableOpacity
            style = {[
              styles.width80,
              {
                backgroundColor: '#DDDDDD',
                padding: 10,
                borderRadius: 15,
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }]
            }
            onPress={this.uploadLicense}
          >
            <Text style={[{fontSize: 18}]}> Drivers license </Text>
            <Icon
              name="chevron-right"
              size={28}
              color={colors.aa}
              onPress={this.uploadLicense}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style = {[
              styles.width80,
              {
                backgroundColor: '#DDDDDD',
                padding: 10,
                borderRadius: 15,
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }]
            }
            onPress={this.uploadVehicleReg}
          >
            <Text style={[{fontSize: 18}]}> Vehicle registration </Text>
            <Icon
              name="chevron-right"
              size={28}
              color={colors.aa}
              onPress={this.uploadVehicleReg}
            />
          </TouchableOpacity>

          <Text
            style={{alignSelf: "flex-end", marginTop: 20, marginRight: 7, color: "white", fontSize: 20, fontFamily: "Palatino"}}
            onPress={() => console.log("skip")}
          > 
            skip >
          </Text>
        </View>
      </View>
    );
  }
}
