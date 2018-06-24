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
import { onSignIn } from "../../util/checkAuth";
import PreLoader from "../others/PreLoader";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
      mobile: "",
      show: false,
    };
    this.onSignUp = this.onSignUp.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: !this.state.show });
  }

  hideModal() {
    this.setState({ show: false });
  }

  onSignUp() {
    const { firstName, lastName, phoneNumber } = this.props.navigation.state.params;
    let email = this.state.email.toLowerCase(),
      password = this.state.password,
      repeatPassword = this.state.repeatPassword;

    if (email === "") {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Please enter a password");
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
      this.showModal()
      lib.signup(newUser);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.signup.error && !nextProps.screenProps.signup.fetching) {
        this.hideModal();
        alert(nextProps.screenProps.signup.error)
    }

    const verification = nextProps.screenProps.user.user.verification ?
        nextProps.screenProps.user.user.verification : false;
    if(verification) {
      const email = this.state.email.toLowerCase();
      const  password = this.state.password;
      onSignIn(email, password, verification)
      //TODO do not redirect to AuthLoading
      this.props.navigation.navigate('AuthLoading')
    }
    if (nextProps.screenProps.user.error && !nextProps.screenProps.user.fetching) {
      this.hideModal();
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
        {this.state.show ? 
          <PreLoader
            text="Creating Account..."
          />
          :
          null
        }
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
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={40}
            enabled
          >
            <SignUpB
              email={email => this.setState(() => ({ email }))}
              password={password => this.setState(() => ({ password }))}
              repeatPassword={repeatPassword =>
                this.setState(() => ({ repeatPassword }))
              }
              value={this.state}
            />
          </KeyboardAvoidingView>
          <Button
            text={"Register"}
            textColor={[{ color: colors.a }]}
            event={this.onSignUp}
            button={[
              {
                position: "absolute",
                bottom: 0,
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
      </View>
    );
  }
}

export default SignUp;
