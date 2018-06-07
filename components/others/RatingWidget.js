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
import IconM from "react-native-vector-icons//MaterialIcons";

const RatingWidget = ({
  title,
  subTitle1,
  value1,
  subTitle2,
  value2
}) => (
  <View style={[styles.wrapper]}>
    <View style={[styles.subWrapper, {height: "40%"}]}>
      <View style={[styles.container, {marginTop: 0, backgroundColor: color.black1}]}>
        <View style={[styles.subContainer, {flex: 1, alignItems: "center"}]}>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <IconM
              name="star"
              size={30}
              color={color.orange}
            />
            <Text style={{color: "white", fontSize: 30, fontWeight: "bold", marginLeft: 8}}>4.89</Text>
          </View>
          <Text style={{color: color.grey, marginTop: 15}}>YOUR CURRENT RATING</Text>
        </View>
      </View>
      <View style={[styles.container, styles.centeredContainer, {marginTop: 0, backgroundColor: color.black1}]}>
        <View style={[styles.subContainer1, {alignItems: "center"}]}>
          <Text style={{fontWeight: "bold", fontSize: 20, color: color.white}}>
            512
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7, color: color.grey}}>
            LIFETIME TRIPS
          </Text>
        </View>
        <View style={[styles.subContainer1, {marginLeft: 10, alignItems: "center"}]}>
          <Text style={{fontWeight: "bold", fontSize: 20, color: color.white}}>
            456
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7, color: color.grey}}>
           RATED TRIPS
          </Text>
        </View>

        <View style={[styles.subContainer1, {alignItems: "center"}]}>
          <Text style={{fontWeight: "bold", fontSize: 20, color: color.white}}>
            345
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7, color: color.grey}}>
            5-STAR
          </Text>
        </View>
      </View>
    </View>
    <View>
      <View style={[styles.container]}>
        <View style={[styles.subContainer, {flex: 1/5, alignItems: "center"}]}>
          <IconM
            name="feedback"
            size={25}
            color={color.grey}
          />
        </View>
        <View style={[styles.subContainer, {flex: 1, marginLeft: 10, }]}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>
            Feedback
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7}}>
            Your Top Reported Issues:
          </Text>
          <Text style={{color: color.orange, fontWeight: "bold"}}>
            Safety
          </Text>
        </View>

        <View style={[styles.subContainer, {flex: 1/5, alignItems: "flex-end"}]}>
          <Icon
            name="chevron-right"
            size={25}
            color={color.grey}
          />
        </View>
      </View>
      <View style={[styles.container]}>
        <View style={[styles.subContainer, {flex: 1/5, alignItems: "center"}]}>
          <IconM
            name="feedback"
            size={25}
            color={color.grey}
          />
        </View>
        <View style={[styles.subContainer, {flex: 1, marginLeft: 10, }]}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>
            Top Partners
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7}}>
            Your Top Reported Issues:
          </Text>
          <Text>
            Safety
          </Text>
        </View>

        <View style={[styles.subContainer, {flex: 1/5, alignItems: "flex-end"}]}>
          <Icon
            name="chevron-right"
            size={25}
            color={color.grey}
          />
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    height: "100%",
  },
  subWrapper: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 20,
    opacity: .9,
    marginTop: 10
  },
  centeredContainer: {
    justifyContent: "space-between"
  },
  subContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  subContainer1: {
    flexDirection: "column",
    justifyContent: "center",
  },
  viewRigth: {
    alignItems: "flex-end"
  }
})

const color = {
  grey: "#777776",
  black1: "#050505",
  orange: "#e8bf45",
  white: "white"
}

export default RatingWidget;