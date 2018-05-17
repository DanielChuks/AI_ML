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
import propTypes from "prop-types";
import styles, { colors } from "../../styles/style";
import Inputs from "../others/Inputs";
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
      <ScrollView style={{ paddingLeft: 10, paddingRight: 10, marginTop: 100}}>
        <Inputs
          text="First name"
          isPassword={false}
          onChangeText={this.props.firstName}
          value={this.props.value.firstName}
        />
        <Inputs
          text="Last name"
          isPassword={false}
          onChangeText={this.props.lastName}
          value={this.props.value.firstName}
        />
        <Inputs
          text="080x xxx xxxx "
          disc="Mobile"
          isPassword={false}
          onChangeText={this.props.mobile}
          value={this.props.value.mobile}
        />
      </ScrollView>
    );
  }
}
