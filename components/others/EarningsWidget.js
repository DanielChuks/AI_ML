import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import normalize from '../../styles/normalize';
import Chart from '../history/chart2';
const { RATIO_X, RATIO_Y, RATIO_F } = normalize;

const EarningsWidget = ({
  stats
}) => (
  <View style={[styles.wrapper]}>
    <View style={[styles.subWrapper, {height: "40%"}]}>
      <Chart
        style={{
          flex: 1,
          width: undefined,
          height: undefined
        }}
        stats={stats}
      />
    </View>
    <View>
      <View style={[styles.container]}>
        <View style={[styles.subContainer, {flex: 1/5, alignItems: "center"}]}>
          <Icon
            name="share"
            size={25}
            color={color.grey}
          />
        </View>
        <View style={[styles.subContainer, {flex: 1, marginLeft: 10 * RATIO_X, }]}>
          <Text style={{fontWeight: "bold", fontSize: 20 * RATIO_F}}>
            Invites
          </Text>
          <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y}}>
            Earn cash for every friend you refer to Bukka driver.
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
    marginTop: 10 * RATIO_Y
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

export default EarningsWidget;