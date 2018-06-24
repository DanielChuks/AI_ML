import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from "react-native";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, RATIO_F, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;

const PreLoader = ({
  text,
}) => (
  <View style={{
      height: DEVICE_HEIGHT,
      width: DEVICE_WIDTH,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      zIndex: 3939,
      left: 0,
      backgroundColor: "#622019",
      opacity: 0.9,
    }}
  >
    <Image
      source={require("../../assets/images/fan.gif")}
      style={{
        height: 40 * RATIO_Y,
        width: 40 * RATIO_X,
        marginBottom: 30* RATIO_Y
      }}
    />
    <Text style={{
        color: "white",
        fontSize: 20 * RATIO_F
      }}
    >
      { text || null }
    </Text>
  </View>
);

export default PreLoader;

