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

const FAQtab = ({
  text
}) => {
  return (
    <TouchableOpacity style={[
      styles2.container
    ]}
    activeOpacity = {.9}
    >
      <Text style={{color: colors.grey, fontSize: 22}}>{text}</Text>
      <Icon
        name="chevron-right"
        size={30}
        color={colors.grey}
        onPress={this.toggleSecure}
      />
    </TouchableOpacity>
  )
}

const styles2 = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 30,
    borderTopColor: colors.grey4,
    borderTopWidth: 1
  }
});

export default FAQtab;