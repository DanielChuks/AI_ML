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
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    let email = this.state.email.toLowerCase(),
      password = this.state.password,
      repeatPassword = this.state.repeatPassword,
      firstName = this.state.firstName,
      lastName = this.state.lastName,
      phoneNumber = this.state.mobile;

    if (email === "") {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("please enter a password");
    } else if (repeatPassword !== password) {
      alert("Password mismatch");
    } else if (firstName === "") {
      alert("Please enter a first name");
    } else if (lastName === "") {
      alert("Please enter a last name");
    } else if (phoneNumber === "") {
      alert("Please enter a valid phone number");
    } else {
      let newUser = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        userType: "driver"
      };
      lib.signup(newUser);
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
            style={[{ width: 200, height: 75 }]}
            onLoadStart={e => this.setState({ loading: true })}
            onLoad={e => this.setState({ loading: false })}
          />
          <Swiper
            activeDotColor="white"
            index={1}
            bounces={true}
            loop={false}
            onIndexChanged={index => console.log(index)}
          >
            <SignUpA
              email={email => this.setState(() => ({ email }))}
              password={password => this.setState(() => ({ password }))}
              repeatPassword={repeatPassword =>
                this.setState(() => ({ repeatPassword }))
              }
              value={this.state}
            />
            <SignUpB
              firstName={firstName => this.setState(() => ({ firstName }))}
              lastName={lastName => this.setState(() => ({ lastName }))}
              mobile={mobile => this.setState(() => ({ mobile }))}
              value={this.state}
            />
          </Swiper>
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
              text={"Sign Up"}
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
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "rgba(255, 255, 255,.6)" }}>
            Already have an Account?
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signin")}
              style={{ width: 50, height: 13 }}
            >
              <Text style={{ paddingLeft: 5, color: "rgba(255, 255, 255,1)" }}>
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
