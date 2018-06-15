import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles, { colors } from "../../styles/style";
import SignUpA from "./SignUpOne";
import Button from "../others/Button";
import Img from "../others/Images";
import rsc from "../../lib/resources";
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y } = normalize;

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
      <KeyboardAvoidingView style={[styles.container]} behavior="padding" enabled>
        <View style={{backgroundColor: "grey", width: "100%", height: 30 * RATIO_Y}}/>
        <Background bugg={bugg} opacity={0.7} />
        <View
          style={{
            flex: 5,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={{ marginTop: 20 * RATIO_Y}}>
            <Img
              source={{ uri: rsc.logo }}
              style={[{ width: 160 * RATIO_X, height: 60 * RATIO_Y}]}
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
        </View>
        <View
          style={{ flex: 1, height: 400 * RATIO_Y, alignItems: "center" }}
        >
          <Text style={{ color: "rgba(255, 255, 255,.6)", marginTop: 20 * RATIO_Y}}>
            Already have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("signin")}
            style={{ width: "100%", height: 25 * RATIO_Y }}
          >
            <Text style={{
              paddingLeft: 5 * RATIO_X,
              color: "rgba(255, 255, 255,1)",
              marginBottom: -5 * RATIO_Y,
              textAlign: "center"
            }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;
