import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import styles, { colors } from "../../styles/style";
import Inputs from "../others/Inputs";
import Button from "../others/Button";
import Img from "../others/Images";
import lib from "../../lib/lib";
import rsc from "../../lib/resources";
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";
import { onSignIn } from "../../util/checkAuth"
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y } = normalize;

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      switchScreen: false
    };
    this.onLogin = this.onLogin.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.user.user){
      const { email, password } = this.state;
      const verification = nextProps.screenProps.user.user.verification ?
                            nextProps.screenProps.user.user.verification : false;
      if (verification) {
        onSignIn(email, password, verification)
        this.props.navigation.navigate('AuthLoading')
      }
    }

    if (nextProps.screenProps.user.forgot_password.fetched) {
      alert('A password reset link has been to your provided email.')
      lib.refresh('SIGNIN_PAGE')
      this.props.navigation.push('signin')
    }
  }

  onLogin() {
    if (this.state.email === "") {
      alert("Email field cannot be empty");
    } else if (this.state.password === "") {
      alert("Email field cannot be empty");
    } else {
      const { email, password } = this.state;
      lib.signin(email.toLowerCase(), password);
    }
  }

  onSend() {
    if (this.state.email === "") {
      alert("Email field cannot be empty");
    } else {
      const { email } = this.state;
      lib.forgotPassword(email);
    }
  }

  render() {
    const { user } = this.props.screenProps;
    return (
      <KeyboardAvoidingView
        style={[
          styles.container,
          {
            backgroundColor: "transparent",
            position: "relative"
          }
        ]}
        behavior="padding"
        keyboardVerticalOffset={5}
        enabled
      >
        <View style={{backgroundColor: "grey", width: "100%", height: 30 * RATIO_Y}}/>
        <Background bugg={bugg} opacity={0.7}/>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            paddingLeft: 10 * RATIO_X,
            paddingRight: 10 * RATIO_X,
            justifyContent: "space-around"
          }}
        >
          <View>
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
          </View>

          <ScrollView style={{ width: "100%", marginTop: 20 * RATIO_Y }}>
            {this.state.switchScreen ? (
              <View>
                <Inputs
                  text="Email address"
                  isPassword={false}
                  onChangeText={email => this.setState(() => ({ email }))}
                  value={this.state.email}
                />
              </View>
            ) : (
              <View>
                <Inputs
                  text="Email address"
                  isPassword={false}
                  onChangeText={email => this.setState(() => ({ email }))}
                  value={this.state.email}
                />
                <Inputs
                  text="Password"
                  isPassword={true}
                  onChangeText={password => this.setState(() => ({ password }))}
                  value={this.state.password}
                />
              </View>
            )}

            <TouchableOpacity
              onPress={() =>
                this.setState(prevState => ({
                  switchScreen: !prevState.switchScreen
                }))
              }
            >
              <Text
                style={{
                  paddingLeft: 5 * RATIO_X,
                  color: "rgba(255, 255, 255,1)",
                  textAlign: "right",
                  color: "#F69322",
                  fontFamily: "Comfortaa-Regular"
                }}
              >
                {this.state.switchScreen ? "Sign In?" : "Forgot Password?"}
              </Text>
            </TouchableOpacity>
          </ScrollView>
          {this.state.switchScreen ? (
            <Button
              text="Send"
              textColor={[{ color: colors.a, fontFamily: "Comfortaa-Bold" }]}
              event={this.onSend}
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
              text={
                user.fetching && !user.isAuthenticated
                  ? "Please wait.."
                  : "Sign In"
              }
              textColor={[{ color: colors.a, fontFamily: "Comfortaa-Bold" }]}
              event={
                user.fetching && !user.isAuthenticated
                  ? () => alert("signing in")
                  : this.onLogin
              }
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
                styles.button__Wide__Medium,
                styles.button_short
              ]}
            />
          )}
        </View>
          <View
            style={{ flex: 1, height: 789 * RATIO_Y, alignItems: "center"}}
          >
            <Text style={{color: "rgba(255, 255, 255,.6)", marginTop: 20 * RATIO_Y }}>
            Don't have an Account?
              
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("register1")}
                style={{ width: "auto", height: 25 * RATIO_Y }}
              >
                <Text style={{ paddingLeft: 5 * RATIO_X, color: "rgba(255, 255, 255,1)", marginBottom: -9 * RATIO_Y }}>
                Register
                </Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}
