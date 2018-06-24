import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import IconM from "react-native-vector-icons//MaterialIcons";
import { colors } from "react-native-elements";

const RadioSelect = ({
  name,
  text,
  onPress,
  backgroundColor,
  marginTop,
  style
}) => (
  <View style={[myStyles.container, { backgroundColor, marginTop }, { ...style }]}>
    <Text style={[myStyles.text]}>{text}</Text>
    <IconM
      name={name}
      size={30}
      color={colors.grey}
      onPress={onPress}
    />
  </View>
);

const myStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20
  }
})

export default RadioSelect;