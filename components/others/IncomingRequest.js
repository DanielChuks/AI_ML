import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import IconM from "react-native-vector-icons//MaterialIcons";
import { colors } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;

export default class IncomingRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 4,
    }
  }

  render() {
    return (
      <View
        style={this.props.style}
      >
        <View style={[styles.reject]}>
          <TouchableOpacity style={[
            styles.reject,
            {
              width: "auto",
              marginLeft: 20,
              height: 80
            }
          ]} >
            <IconM
              name="close"
              size={45}
              color={colors.grey3}
              onPress={this.props.cancel}
            />
            <Text style={[
              styles.text,
              { 
                marginLeft: 20,
                fontSize: 20,
                color: "black"
              }
            ]}>NO THANKS </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.content]}>
          <Text style={[
            styles.text,
            {
              fontSize: 25
            }
          ]} >
            {this.state.time + "  min" } 
          </Text>
          <TouchableOpacity 
            onPress={ this.props.accept }
          >
            <Animatable.View 
              style={[ styles.button ]}
              animation="pulse"
              easing="ease-in-back"
              iterationCount="infinite"
            />
          </TouchableOpacity>
          <Text style={[
            styles.text,
            {
              fontSize: 16
            }
          ]} >
            {this.props.acceptingRequest ? "CONNECTING..." : 'TAP TO ACCEPT'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    position: "absolute",
    top: 0,
    left:0,
    zIndex: 3000,
  },
  reject: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: 'white'
  },
  content: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30,
    backgroundColor: "black",
    marginBottom: 60,
  },
  accept: {
    width: "100%",
    padding: 10,
    height: "auto",
    backgroundColor: "#1EBAD8",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 20,
    borderColor: "white",
  },
  text: {
    color: colors.grey4,
    textAlign: "center"
  },
  button: {
    borderRadius: 35,
    width: 70,
    height: 70,
    margin: 20,
    backgroundColor: "grey",
    borderColor: colors.grey4,
    borderWidth: 10
  },
  request_container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    position: "absolute",
    zIndex: 3000,
  },
});

