import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons//MaterialIcons";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, RATIO_F } = normalize;

const RatingWidget = ({
  averageRating,
  totalTrips,
  ratedTrips,
  fiveStars
}) => (
  <View style={[styles.wrapper]}>
    <View style={[styles.subWrapper]}>
      <View style={[styles.container, {marginTop: 0, backgroundColor: color.black1}]}>
        <View style={[styles.subContainer, {flex: 1, alignItems: "center"}]}>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <IconM
              name="star"
              size={30 * RATIO_F}
              color={color.orange}
            />
            <Text style={{color: "white", fontSize: 30 * RATIO_F, fontWeight: "bold", marginLeft: 8 * RATIO_X}}>{ averageRating || 0.00 }</Text>
          </View>
          <Text style={{color: color.grey, marginTop: 5 * RATIO_Y}}>YOUR CURRENT RATING</Text>
        </View>
      </View>
      <View style={[styles.container, styles.centeredContainer, {marginTop: 0, backgroundColor: color.black1, zIndex: 2}]}>
        <View style={[styles.subContainer1, {alignItems: "center"}]}>
          <Text style={{fontWeight: "bold", fontSize: 20 * RATIO_F, color: color.white}}>
            { totalTrips || 0}
          </Text>
          <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y, color: color.grey}}>
            LIFETIME TRIPS
          </Text>
        </View>
        <View style={[styles.subContainer1, {marginLeft: 10 * RATIO_X, alignItems: "center"}]}>
          <Text style={{fontWeight: "bold", fontSize: 20 * RATIO_F, color: color.white}}>
            { ratedTrips || 0}
          </Text>
          <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y, color: color.grey}}>
           RATED TRIPS
          </Text>
        </View>

        <View style={[styles.subContainer1, {alignItems: "center"}]}>
          <Text style={{fontWeight: "bold", fontSize: 20 * RATIO_F, color: color.white}}>
            { fiveStars || 0 }
          </Text>
          <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y, color: color.grey}}>
            5-STAR
          </Text>
        </View>
      </View>
    </View>
    <ScrollView>
        <View style={[styles.container, {marginTop: 100}]}>
          <View style={[styles.subContainer, {flex: 1/5, alignItems: "center"}]}>
            <IconM
              name="feedback"
              size={25 * RATIO_F}
              color={color.grey}
            />
          </View>
          <View style={[styles.subContainer, {flex: 1, marginLeft: 10 * RATIO_X, }]}>
            <Text style={{fontWeight: "bold", fontSize: 20 * RATIO_F}}>
              Feedback
            </Text>
            <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y}}>
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
        <View style={[styles.container, {marginBottom: 2}]}>
          <View style={[styles.subContainer, {flex: 1/5, alignItems: "center"}]}>
            <IconM
              name="feedback"
              size={25 * RATIO_F}
              color={color.grey}
            />
          </View>
          <View style={[styles.subContainer, {flex: 1, marginLeft: 10 * RATIO_X, }]}>
            <Text style={{fontWeight: "bold", fontSize: 20 * RATIO_F}}>
              Top Partners
            </Text>
            <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y}}>
              Your Top Reported Issues:
            </Text>
            <Text>
              Safety
            </Text>
          </View>

          <View style={[styles.subContainer, {flex: 1/5, alignItems: "flex-end"}]}>
            <Icon
              name="chevron-right"
              size={25 * RATIO_F}
              color={color.grey}
            />
          </View>
        </View>
    </ScrollView>
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
    padding: 10,
    opacity: .9,
    marginTop: 5 * RATIO_Y,
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