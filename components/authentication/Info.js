import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
  ScrollView,
  TextInput
} from "react-native";
import { Permissions } from "expo";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles, { colors } from "../../styles/style";
import Button from "../others/Button";
import rsc from "../../lib/resources";
import Img from "../others/Images";
import Imagepicker from "../others/Imageandvideopicker";
import Camera from "../others/camera";


export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.bikeDoc = this.bikeDoc.bind(this);
    this.carDoc = this.carDoc.bind(this);
    this.motorbikeDoc = this.motorbikeDoc.bind(this);
  }

  bikeDoc() {
    this.props.navigation.navigate('uploaddocument', {type: 'bike'})
  }

  motorbikeDoc() {
    this.props.navigation.navigate('uploaddocument', {type: 'motorbike'})
  }

  carDoc() {
    this.props.navigation.navigate('uploaddocument', {type: 'car'})
  }

  render() {
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
        <View style={{ marginTop: 70}}>
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
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Comfortaa-Bold",
              fontSize: 18,
              textDecorationLine: 'underline',
              textDecorationStyle: 'double'
            }}
          >
            CHECKLIST
          </Text>
          
        </View>
        <View 
          style={{height: 200, width: '100%', padding: 10, backgroundColor: colors.aa, marginTop: 15}}
        >
            <Text style={{fontSize: 20, marginTop: 10, color: "white"}}>
              Excluding bicycles, to drive with Bukka, you must provide the following documents.
            </Text>
            <View 
            style = {{ flex: 1, justifyContent: "center"}}
            >
              <Text style={{ fontSize: 23, color: "white", }}>
                <Icon
                  name="check"
                  size={20}
                />
                Drivers License
              </Text>
              <Text style={{ fontSize: 23, color: "white", }}>
                <Icon
                  name="check"
                  size={20}
                />
                Vehicle registration
              </Text>
            </View>

            <Text style={{ fontSize: 23, color: "white", }}>
              Choose your vehicle type to continue!
            </Text>
        </View>
        <Button
          text={"Bicycle"}
          textColor={[{ color: colors.a }]}
          event={this.bikeDoc}
          button={[
            {
              backgroundColor: "#fff",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              margin: 0,
              shadowColor: "#000000",
              shadowRadius: 5,
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 1
              }
            },
            styles.button__Widec,
            styles.button__Long
          ]}
        />
        <Button
          text={"Motobike"}
          textColor={[{ color: colors.a }]}
          event={this.motorbikeDoc}
          button={[
            {
              backgroundColor: "#fff",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              margin: 0,
              shadowColor: "#000000",
              shadowRadius: 5,
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 1
              }
            },
            styles.button__Widec,
            styles.button__Long
          ]}
        />
        <Button
          text={"Car"}
          textColor={[{ color: colors.a }]}
          event={this.carDoc}
          button={[
            {
              backgroundColor: "#fff",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              margin: 0,
              shadowColor: "#000000",
              shadowRadius: 5,
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 1
              }
            },
            styles.button__Widec,
            styles.button__Long
          ]}
        />
      </View>
    );
  }
}
