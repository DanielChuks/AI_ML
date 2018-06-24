import React from "react";
import {
  ScrollView,
} from "react-native";
import Inputs from "../others/Inputs";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y } = normalize;

export default class SignUpOne extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ScrollView style={{ paddingLeft: 10 * RATIO_X, paddingRight: 10 * RATIO_X, marginTop: 10 * RATIO_Y}}>
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
