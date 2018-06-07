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
import SignUpA from "./SignUpOne";
import Swiper from "react-native-swiper";
import Button from "../others/Button";
import Img from "../others/Images";
import lib from "../../lib/lib";
import rsc from "../../lib/resources";
import Dimensions from "Dimensions";
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";

class SignUp extends Component {
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
    this.next = this.next.bind(this);
  }

  next() {
    let
      firstName = this.state.firstName,
      lastName = this.state.lastName,
      phoneNumber = this.state.mobile;

    if (!/\w{2,}/.test(firstName)) {
      alert("Please enter a valid first name");
    } else if (!/\w{2,}/.test(lastName)) {
      alert("Please enter a valid last name");
    } else if (!/\d{7,}/.test(phoneNumber) || phoneNumber.length > 15) {
      alert("Please enter a valid phone number");
    } else {
      let newUser = {
        firstName,
        lastName,
        phoneNumber
      };
      this.props.navigation.navigate('register2', { ...newUser });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.user.error) {
      if (!nextProps.screenProps.user.error.response) {
        alert(
          "There appers to be a problem with your network connection,Please try again"
        );
      }
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={{backgroundColor: "grey", width: "100%", height: 40}}/>
        <Background bugg={bugg} opacity={0.7} />
        <View
          style={{
            flex: 5,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
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
          <SignUpA
            firstName={firstName => this.setState(() => ({ firstName }))}
            lastName={lastName => this.setState(() => ({ lastName }))}
            mobile={mobile => this.setState(() => ({ mobile }))}
            value={this.state}
          />
          <Button
            text={"Next"}
            textColor={[{ color: colors.a }]}
            event={this.next}
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
          }
        </View>
        <View
          style={{ flex: 1, height: 789, alignItems: "center" }}
        >
          <Text style={{ color: "rgba(255, 255, 255,.6)", marginTop: 20 }}>
            Already have an Account?
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signin")}
              style={{ width: 50, height: 15 }}
            >
              <Text style={{ paddingLeft: 5, color: "rgba(255, 255, 255,1)", marginBottom: -5 }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUp;
