import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import IconM from "react-native-vector-icons/MaterialIcons";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, RATIO_F, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;
const ratings = [1, 2, 3, 4, 5]


const RateDelivery = ({
  like,
  disLike,
  height,
  width,
  color,
  stage
}) => (
  <View style={{
      height: height || DEVICE_HEIGHT,
      width: width || DEVICE_WIDTH,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3939,
      backgroundColor: color || "white",
      opacity: 0.9,
    }}
  >
    <Text
      style={{
        fontSize: 20 * RATIO_F,
        marginTop: 10,
        marginBottom: 40
      }}
    >
      How did this {stage || 'delivery'} go?
    </Text>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: DEVICE_WIDTH,
    }}
    >
      <TouchableOpacity
        style = {{
          height: 80,
          width: 80,
          borderRadius: 40,
          borderWidth: 3,
          borderColor: 'grey',
          marginRight: 5,
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={() => { disLike() }}
      >
      <IconM
        name="thumb-down"
        size={30}
        color={"grey"}
        onPress={() => { disLike() }}
      />
      </TouchableOpacity>
      <TouchableOpacity
        style = {{
          height: 80,
          width: 80,
          borderRadius: 40,
          borderWidth: 3,
          borderColor: 'grey',
          marginLeft: 5,
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={() => { like() }}
      >
      <IconM
        name="thumb-up"
        size={30}
        color={"grey"}
        onPress={() => { like() }}
      />
      </TouchableOpacity>
    </View>
  </View>
);

export default RateDelivery;

