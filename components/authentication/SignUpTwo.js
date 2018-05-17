import React from "react";
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
import Button from "../others/Button";
import Img from "../others/Images";
import lib from "../../lib/lib";
import rsc from "../../lib/resources";

export default class SignUpOne extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ScrollView style={{ paddingLeft: 10, paddingRight: 10, marginTop: 50 }}>
        <Inputs
          text="Email address"
          isPassword={false}
          onChangeText={this.props.email}
          value={this.props.value.email}
        />
        <Inputs
          text="Password"
          isPassword={true}
          onChangeText={this.props.password}
          value={this.props.value.password}
        />
        <Inputs
          text="Repeat Password"
          isPassword={true}
          onChangeText={this.props.repeatPassword}
          value={this.props.value.repeatPassword}
        />
      </ScrollView>
    );
  }
}
