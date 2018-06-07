import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
  ScrollView,
  TextInput,
  StyleSheet,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons//MaterialIcons";
import IconMC from "react-native-vector-icons//MaterialCommunityIcons";
import { colors } from "react-native-elements";

const FAQheader = ({
  text
}) => {
  return (
    <View style={[
      styles2.container
    ]}
    >
      <Text style={{color: colors.grey2, fontSize: 22}}>{text}</Text>
    </View>
  )
}

const styles2 = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: "#f2f2f2",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 30,

  }
});

export default FAQheader;