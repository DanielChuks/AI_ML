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
import styles, { colors } from "../../styles/style";
import Inputs from "../others/Inputs";
import propTypes from "prop-types";
import SignUpB from "../authentication/SignUpTwo";
import SignUpA from "../authentication/SignUpOne";
import Swiper from "react-native-swiper";
import Button from "../others/Button";
import Img from "../others/Images";
import lib from "../../lib/lib";
import rsc from "../../lib/resources";
import Dimensions from "Dimensions";
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInputLabel: false,
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
      mobile: "",
      page: false,
      index: 0
    };
    this.dothis = this.dothis.bind(this);
  }

  dothis() {
    console.log("Herer")
  }


  render() {
    return (
      <View style={[styles.container]}>
        <Background bugg={bugg} />
        <View style={{ flex: 1 }} />
        <View
          style={{
            flex: 5,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Img
            source={{ uri: rsc.logo }}
            style={[{ width: 200, height: 75, marginTop: 400 }]}
            onLoadStart={e => this.setState({ loading: true })}
            onLoad={e => this.setState({ loading: false })}
          />
          <Text style={{color: "white", fontSize:20, marginBottom: 20}}>DRIVERS</Text>
          <View style={[styles.containerb, {marginBottom: 50}] } >
            <Button
              text={"Sign In"}
              textColor={[{ color: colors.b }]}
              event={this.dothis}
              button={[
                {
                  backgroundColor: "orange",
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  marginRight: 5,
                  shadowColor: "#000000",
                  shadowRadius: 5,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 0,
                    height: 1
                  }
                },
                styles.button__Wide__Medium,
                styles.button_short
              ]}
            />
            <Button
              text={"Register"}
              textColor={[{ color: "orange" }]}
              event={this.dothis}
              button={[
                {
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  marginLeft: 5,
                  shadowColor: "#000000",
                  shadowRadius: 5,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 0,
                    height: 1
                  }
                },
                styles.button__Wide__Medium,
                styles.button_short
              ]}
            />
          </View>
          )}
        </View>
      </View>
    );
  }
}

export default Home;
