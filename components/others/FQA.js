import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import IconM from "react-native-vector-icons//MaterialIcons";
import { colors } from "react-native-elements";
import FAQtab from "./FAQtab"
import FAQheader from "./FAQheader"
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, RATIO_F } = normalize;

export default class FAQ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={this.props.style}
      >
        <View >
          <View style={[ styles2.offset ]} />
          <View style={[
            styles2.header
          ]}>
            <TouchableOpacity>
              <IconM
                name="close"
                size={30 * RATIO_F}
                color={colors.grey4}
                onPress={this.props.onPress}
              />
            </TouchableOpacity>
            <Text style={{color: colors.grey4, fontSize: 22 * RATIO_F, marginLeft: 20 * RATIO_X}}> Help </Text>
          </View>
        </View>
        <View style={{
          // flex: 1
        }}>
          <View style={[
            styles2.faqContainer
          ]}>
            <ScrollView style={[styles2.scrollView]}>
              <FAQtab text="Report an issue with this trip" />
              <FAQheader text="Additional topics" />
              <FAQtab text="Trip and Fare Riview" />
              <FAQtab text="Account and Payment Options" />
              <FAQtab text="A guide to Bukka" />
              <FAQtab text="Sign Up" />
              <FAQtab text="More" />
              <FAQtab text="Accessibility" />
              <FAQheader text="Support Messages" />
              <FAQtab text="View all messages" />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 2000,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 80 * RATIO_Y,
    width: "100%",
    paddingLeft: 20 * RATIO_X
  },
  offset: {
    width: "100%",
    height: 30 * RATIO_Y,
    backgroundColor: "black"
  },
  faqContainer: {
    justifyContent: "flex-end",
  },
  scrollView: {
    backgroundColor: "white",
    paddingBottom: 20 * RATIO_Y,
    height: "90%"
  }
});
