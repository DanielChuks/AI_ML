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
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Widget = ({
  title,
  subTitle1,
  value1,
  subTitle2,
  value2
}) => (
  <View style={[styles.container]}>
    <View style={[styles.subContainer]}>
      <Text style={{color: color.grey, fontWeight: "bold"}}> {title} </Text>
      <Icon
        name="chevron-right"
        size={30}
        color={color.grey}
        onPress={this.toggleSecure}
      />
    </View>
    <View style={[styles.subContainer]}>
      <View>
        <Text>{subTitle1}</Text>
        <Text style={{color: color.grey, fontWeight: "bold"}}>{value1}</Text>
      </View>
      <View style={[styles.viewRigth]}>
        <Text
          style={{
            fontSize: 23,
            color: "green",
            fontWeight: "bold"
          }}>
          {subTitle2}
        </Text>
        <Text style={{color: color.grey, fontWeight: "bold"}}>{value2}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
    opacity: .9,
    marginTop: 10
  },
  subContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewRigth: {
    alignItems: "flex-end"
  }
})

const color = {
  grey: "#777776"
}

export default Widget;