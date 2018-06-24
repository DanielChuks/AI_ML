import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { colors } from "react-native-elements";
import normalize from '../../styles/normalize';
const { RATIO_F } = normalize;

const FAQtab = ({
  text
}) => {
  return (
    <TouchableOpacity style={[
      styles2.container
    ]}
    activeOpacity = {.9}
    >
      <Text style={{flex: 4/5,color: colors.grey, fontSize: 22 * RATIO_F}}>{text}</Text>
      <Icon
        name="chevron-right"
        size={30 * RATIO_F}
        color={colors.grey}
        onPress={this.toggleSecure}
      />
    </TouchableOpacity>
  )
}

const styles2 = StyleSheet.create({
  container: {
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