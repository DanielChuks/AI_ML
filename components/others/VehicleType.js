import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Easing,
  StyleSheet,
  Modal
} from "react-native";
import IconM from "react-native-vector-icons//MaterialIcons";
import { colors } from "react-native-elements";

const VehicleType = ({
  name,
  text,
  onPress,
  backgroundColor,
  marginTop
}) => (
  <View style={[myStyles.container, { backgroundColor, marginTop }]}>
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

export default VehicleType;