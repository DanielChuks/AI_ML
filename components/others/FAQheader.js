import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { colors } from "react-native-elements";
import normalize from '../../styles/normalize';
const { RATIO_Y, RATIO_F } = normalize;

const FAQheader = ({
  text
}) => {
  return (
    <View style={[
      styles2.container
    ]}
    >
      <Text style={{color: colors.grey2, fontSize: 22 * RATIO_F}}>{text}</Text>
    </View>
  )
}

const styles2 = StyleSheet.create({
  container: {
    height: 120 * RATIO_Y,
    width: "100%",
    backgroundColor: "#f2f2f2",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 30,

  }
});

export default FAQheader;