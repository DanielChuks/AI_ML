import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import styles, { colors } from "../../styles/style";
import Button from "../others/Button";
import Img from "../others/Images";
import rsc from "../../lib/resources";
import Dimensions from "Dimensions";
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y } = normalize;

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
    this.singin = this.singin.bind(this);
    this.register = this.register.bind(this);
  }

  singin() {
    this.props.navigation.navigate('signin');
  }

  register() {
    this.props.navigation.navigate('register1');
  }


  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={[styles.container]}>
        <View style={{backgroundColor: "#4C0F0A", width: "100%", height: 30 * RATIO_Y}}/>
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
            style={[{ width: 200 * RATIO_X, height: 75 * RATIO_Y, marginTop: 250 * RATIO_Y }]}
            onLoadStart={e => this.setState({ loading: true })}
            onLoad={e => this.setState({ loading: false })}
          />
          <Text style={{color: "white", fontSize:20, marginBottom: 20}}>DRIVERS</Text>
          <View style={[styles.containerb, {marginBottom: 50}] } >
            <Button
              text={"Sign In"}
              textColor={[{ color: colors.b }]}
              event={this.singin}
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
                    height: 1 * RATIO_Y
                  }
                },
                styles.button__Wide__Medium,
                styles.button_short
              ]}
            />
            <Button
              text={"Register"}
              textColor={[{ color: "orange" }]}
              event={this.register}
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
                    height: 1 * RATIO_Y
                  }
                },
                styles.button__Wide__Medium,
                styles.button_short
              ]}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
