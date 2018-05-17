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
import SignUpB from "./SignUpTwo";
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
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { firstName, lastName, phoneNumber } = this.props.navigation.state.params;
    let email = this.state.email.toLowerCase(),
      password = this.state.password,
      repeatPassword = this.state.repeatPassword;

    if (email === "") {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("please enter a password");
    } else if (repeatPassword !== password) {
      alert("Password mismatch");
    } else {
      let newUser = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        userType: "driver"
      };
      this.props.navigation.navigate('uploaddocument')
      // lib.signup(newUser);
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
        <View style={{backgroundColor: "grey", width: "100%", height: 25}}/>
        <Background bugg={bugg} opacity={0.7}/>
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
          <SignUpB
            email={email => this.setState(() => ({ email }))}
            password={password => this.setState(() => ({ password }))}
            repeatPassword={repeatPassword =>
              this.setState(() => ({ repeatPassword }))
            }
            value={this.state}
          />
          {this.props.screenProps.user.fetching ? (
            <Button
              text="Creating Account..."
              textColor={[{ color: colors.a }]}
              event={() => console.log("Creating Account")}
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
          ) : (
            <Button
              text={"Register"}
              textColor={[{ color: colors.a }]}
              event={this.onSignUp}
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
          )}
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
