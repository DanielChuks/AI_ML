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
  Alert
} from "react-native";
import { Permissions } from "expo";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles, { colors } from "../../styles/style";
import Button from "./Button";


export default class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

  }

  render() {
    return (
      <View style={[
        {
          backgroundColor:'#e8eaed',
          flex:1,
          alignContent: "center"
        }
      ]}>
        <View style={{width: "100%", height: 25}}/>
        <View style={[styles.centeredView, {backgroundColor: "black", height: 40}]}>
          <Text style={{color: "white"}}> THANK YOU </Text>
        </View>
        <View style={[styles.centeredView]}>
          <Text style={{marginTop: 20, marginBottom: 20, fontSize: 15, fontWeight: "bold"}}> 
            YOU'RE ALL SIGN UP! 
          </Text>
          <Text style={{textAlign: "center", paddingLeft: 10, paddingRight: 10}}>
           Congratulations, you've completed the driver sign up process. You'll be notified shortly, once you're approved.
          </Text>
          <Text style={{textAlign: "center", marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10}}>
           While your account is being reviewed, feel free to watch the video below to get familiar with being a Bukka Partner.
          </Text>
        </View>
        <View style={[styles.centeredView, {}]}>
          <Image 
            source={require("../../assets/images/youtube.png") }
            style={[{ width: 240, height: 135, marginTop: 20, marginBottom: 20 }]} 
          />
        </View>
        <View style={[styles.centeredView]}>
          <Text style={{textAlign: "center", paddingLeft: 10, paddingRight: 10}}>
           You understand that, in order to use Bukka app, you accept the Bukka Driver Policy.
          </Text>
        </View>
      </View>
    )
  }
  
}

