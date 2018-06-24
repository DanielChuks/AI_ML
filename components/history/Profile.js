import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconMC from "react-native-vector-icons//MaterialCommunityIcons";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, RATIO_F } = normalize;
const avatar = require("../../assets/images/avatar.jpg");

const Profile = ({
  src,
  displayName,
  averageRating,
  totalTrips,
  driverDuration,
  durationUnint
}) => (
  <View style={[styles.wrapper]}>
    <View>
      <View style={[styles.profile]}>
        <Image
          source={src ? { uri: src } : avatar}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginTop: 5 * RATIO_Y
          }}
          resizeMode={'contain'}
          resizeMethod={'resize'}
        />
        <Text
          style={{
            color: color.white,
            marginTop: 10 * RATIO_Y,
            marginBottom: 45 * RATIO_Y
          }}
        >
          { displayName || 'DRIVER' }
        </Text>
      </View>

      <View style={[
        styles.container,
        {
          height: 60 * RATIO_Y,
          width: 150 * RATIO_X,
          padding: 10,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          marginTop: -30 * RATIO_Y,
          alignSelf: "center"
        }
      ]}>
        <IconMC
          name="checkbox-multiple-marked-circle"
          size={25 * RATIO_F}
          color={color.green}
        />
        <Text style={{
          fontSize: 30 * RATIO_F,
          fontWeight: "bold",
        }}
        >
          { ` ${averageRating}` }
        </Text>
        <Icon
          name="star"
          size={15 * RATIO_F}
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
          <Text style={{fontWeight: "bold", fontSize: 25 * RATIO_F}}>
            { totalTrips || 0 }
          </Text>
          <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y}}>
            Trips
          </Text>
        </View>

        <View style={[styles.subContainer, {flex: 1/2}]}>
          <Text style={{fontWeight: "bold", fontSize: 25 * RATIO_F}}>
            { driverDuration || 0 }
          </Text>
          <Text style={{marginBottom: 7 * RATIO_Y, marginTop: 7 * RATIO_Y}}>
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
    height: "100%"
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