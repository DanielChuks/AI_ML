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
          text="+234 080x xxx xxxx"
          disc="Mobile"
          isPassword={false}
          onChangeText={this.props.mobile}
          value={this.props.value.mobile}
        />
      </ScrollView>
    );
  }
}
