import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/style";
import propTypes from "prop-types";

const Button = props => (
  <TouchableOpacity style={props.button} onPress={props.event}>
    <Text style={props.textColor}>{props.text}</Text>
  </TouchableOpacity>
);

export default Button;

Button.propTypes = {
  button: propTypes.array.isRequired,
  event: propTypes.func.isRequired,
  textColor: propTypes.array.isRequired,
  text: propTypes.string.isRequired
};
