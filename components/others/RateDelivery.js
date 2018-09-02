import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from "react-native";
import IconM from "react-native-vector-icons/MaterialIcons";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, RATIO_F, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;
const ratings = [1, 2, 3, 4, 5]


const RateDelivery = ({
  rateDelivery,
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
      backgroundColor: "white",
      opacity: 0.9,
    }}
  >
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: DEVICE_WIDTH,
    }}
    >
     { ratings.map((rating) => (
      <IconM
        key={rating}
        name="star"
        size={30}
        color={"#1EBAD8"}
        onPress={() => { rateDelivery(rating) }}
      />
     ) ) }
    </View>
    <Text style={{
        fontSize: 20 * RATIO_F,
        marginTop: 10
      }}
    >
      Comment Input should be here
    </Text>
  </View>
);

export default RateDelivery;

