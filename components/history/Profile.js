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
import IconMC from "react-native-vector-icons//MaterialCommunityIcons";
import { colors } from "react-native-elements";

const Profile = ({
  src,
  displayName,
  averageRating,
  totalTrips,
  driverDuration,
  durationUnint
}) => (
  <View style={[styles.wrapper]}>
    <View style={[styles.profile, {height: "40%"}]}>
      <Image
        source={{ uri: src }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60
        }}
        defaultSource={require("../../assets/images/avatar.jpg")}
        resizeMode={'contain'}
        resizeMethod={'resize'}
      />
      <Text
        style={{
          color: color.white,
          marginTop: 10,
          marginBottom: 15
        }}
      >
        { displayName }
      </Text>
      <View style={[
        styles.container,
        {
          bottom: -30,
          position: 'absolute',
          height: 60,
          width: 150,
          padding: 10,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center"
        }
      ]}>
        <IconMC
          name="checkbox-multiple-marked-circle"
          size={25}
          color={color.green}
        />
        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
        >
          { averageRating }
        </Text>
        <Icon
          name="star"
          size={15}
          color={color.black}
        />
      </View>
      
    </View>
    <View>
      <View style={[styles.container]}>
        <View style={[
            styles.subContainer,
            {
              flex: 1/2,
              borderRightWidth: 0.5,
              borderRightColor: color.grey
            }
        ]}>
          <Text style={{fontWeight: "bold", fontSize: 25}}>
            { totalTrips || 0 }
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7}}>
            Trips
          </Text>
        </View>

        <View style={[styles.subContainer, {flex: 1/2}]}>
          <Text style={{fontWeight: "bold", fontSize: 25}}>
            { driverDuration || 0 }
          </Text>
          <Text style={{marginBottom: 7, marginTop: 7}}>
            { durationUnint || 'days'}
          </Text>
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
  profile: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  centeredContainer: {
    justifyContent: "space-between"
  },
  subContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
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
  white: "white",
  green: "green"
}

export default Profile;