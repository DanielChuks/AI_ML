import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import styles, { colors } from "../../styles/style";
import Icon from "react-native-vector-icons/Ionicons";
import propTypes from "prop-types";
import Dimensions from "Dimensions";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y } = normalize;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInputLabel: false,
      isPassword: this.props.isPassword,
      secured: true
    };
    this.triggerdisplayInputLabel = this.triggerdisplayInputLabel.bind(this);
    this.toggleSecure = this.toggleSecure.bind(this);
  }
  toggleSecure() {
    this.setState(() => ({
      secured: !this.state.secured
    }));
  }
  triggerdisplayInputLabel() {
    if (!this.state.displayInputLabel) {
      this.setState(() => ({
        displayInputLabel: true
      }));
    }
  }
  render() {
    const wit = Dimensions.get("window").width;
    return this.state.isPassword ? (
      <View
        style={[
          styles.all_width,
          styles.simple_Margin,
          { paddingBottom: 0 },
          wit <= 320 * RATIO_X ? { marginTop: 5 * RATIO_Y, marginBottom: 5 * RATIO_Y } : null
        ]}
      >
        {this.state.displayInputLabel ? (
          <Animatable.Text
            style={[
              {
                fontFamily: "Comfortaa-Regular",
                color: this.props.labelColor ? this.props.labelColor : colors.b,
              }
            ]}
            animation="fadeInUp"
            iterationCount={1}
          >
            {this.props.text}
          </Animatable.Text>
        ) : (
          <Text
            style={[
              styles.textColorb,
              { fontFamily: "Comfortaa-Regular" }
            ]}
          />
        )}
        <View style={[styles.Password__Input__Container, styles.input_holder]}>
          <TextInput
            placeholder={this.props.text}
            style={[
              styles.input,
              styles.widtha,
              {
                fontFamily: "Comfortaa-Regular",
                color: this.props.labelColor ? this.props.labelColor : colors.b,
              }
            ]}
            placeholderTextColor={this.props.placeholderTextColor? this.props.placeholderTextColor : colors.b}
            onKeyPress={this.triggerdisplayInputLabel}
            secureTextEntry={this.state.secured}
            onChangeText={this.props.onChangeText}
          />
          {this.state.secured ? (
            <Icon
              name="ios-eye-off"
              size={24}
              color={colors.b}
              onPress={this.toggleSecure}
            />
          ) : (
            <Icon
              name="ios-eye"
              size={24}
              color={colors.b}
              onPress={this.toggleSecure}
            />
          )}
        </View>
      </View>
    ) : (
      <View
        style={[
          styles.all_width,
          styles.simple_Margin,
          wit <= 320 * RATIO_X ? { marginTop: 5 * RATIO_Y, marginBottom: 5 * RATIO_Y } : null
        ]}
      >
        {this.state.displayInputLabel ? (
          <Animatable.Text
            style={[{
              fontFamily: "Comfortaa-Regular",
              color: this.props.labelColor ? this.props.labelColor : colors.b,
            }]}
            animation="fadeInUp"
            iterationCount={1}
          >
            {this.props.text}
          </Animatable.Text>
        ) : (
          <Text
            style={[
              styles.textColorb,
              styles.heighta,
              { fontFamily: "Comfortaa-Regular" }
            ]}
          />
        )}
          <TextInput
            placeholder={this.props.disc ? this.props.disc : this.props.text}
            style={[
              styles.input,
              {
                fontFamily: "Comfortaa-Regular",
                color: this.props.labelColor ? this.props.labelColor : colors.b,
              },
              styles.input_holder,
              {paddingLeft: 10 * RATIO_X, paddingRight: 10 * RATIO_X, width: "100%" },
              { borderBottomColor: this.props.borderBottomColor },
              {...this.props.style}
            ]}
            placeholderTextColor={this.props.placeholderTextColor? this.props.placeholderTextColor : colors.b}
            onKeyPress={this.triggerdisplayInputLabel}
            onChangeText={this.props.onChangeText}
          />
      </View>
    );
  }
}

export default Input;

Input.propTypes = {
  isPassword: propTypes.bool.isRequired,
  text: propTypes.string.isRequired,
  onChangeText: propTypes.func.isRequired
};
