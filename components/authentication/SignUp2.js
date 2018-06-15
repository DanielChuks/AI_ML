import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles, { colors } from "../../styles/style";
import SignUpB from "./SignUpTwo";
import Button from "../others/Button";
import Img from "../others/Images";
import lib from "../../lib/lib";
import rsc from "../../lib/resources";
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";
import { onSignIn } from "../../util/checkAuth"
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
      lib.signup(newUser);
    }
  }

  componentWillReceiveProps(nextProps) {
    const email = this.state.email.toLowerCase();
    const  password = this.state.password;
    const verification = nextProps.screenProps.user.user.verification ?
                            nextProps.screenProps.user.user.verification : false;
    if(verification) {
      onSignIn(email, password, verification)
      this.props.navigation.navigate('AuthLoading')
    }
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
        <Background bugg={bugg} opacity={0.7}/>
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
                    height: 1 * RATIO_Y
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
                    height: 1 * RATIO_Y
                  }
                },
                styles.button__Widec,
                styles.button__Long
              ]}
            />
          )}
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
