import React, { Component } from "react";
import { View } from "react-native";
import styles, { colors } from "../../styles/style";
import propTypes from "prop-types";
import Img from "../others/Images";
import Dimensions from "Dimensions";

const Background = ({ bugg, opacity }) => (
  <View
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1
    }}
  >
    <Img
      source={bugg}
      style={[
        {
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height
        }
      ]}
    />
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: `rgba(0,0,0,${opacity || 0.5})`
      }}
    />
  </View>
);

export default Background;
