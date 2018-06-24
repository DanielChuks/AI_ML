import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  WebView
} from "react-native";
import styles, { colors } from "../../styles/style";
import lib from '../../lib/lib'
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y } = normalize;


export default class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.signOut = this.signOut.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.screenProps.user.isAuthenticated) {
      this.props.navigation.navigate('Auth')
    }
  }

  signOut() {
    lib.signOut();
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
        <View style={{width: "100%", height: 30 * RATIO_Y}}/>
        <View style={[styles.centeredView, {backgroundColor: "black", height: 60 * RATIO_Y }]}>
          <TouchableOpacity 
            style={[styles.signout]}
            onPress={this.signOut}
            activeOpacity={0.5}
            >
              <Text style={
              {
                color: "#4ca9e8"
              }}>
                SIGNOUT
              </Text>
          </TouchableOpacity>
          <Text style={{
            color: "white",
            fontSize: 20 * RATIO_Y
          }}> THANK YOU </Text>
        </View>
        <ScrollView>
          <View style={[styles.centeredView]}>
            <Text style={{marginTop: 20 * RATIO_Y, marginBottom: 20 * RATIO_Y, fontSize: 15 * RATIO_Y, fontWeight: "bold"}}> 
              YOU'RE ALL SIGN UP! 
            </Text>
            <Text style={{
              textAlign: "center",
              paddingLeft: 10 * RATIO_X,
              paddingRight: 10 * RATIO_X
            }}>
            Congratulations, you've completed the driver sign up process. You'll be notified shortly, once you're approved.
            </Text>
            <Text style={{
              textAlign: "center",
              marginTop: 10 * RATIO_Y,
              marginBottom: 10 * RATIO_Y,
              paddingLeft: 10 * RATIO_X,
              paddingRight: 10 * RATIO_X
            }}>
            While your account is being reviewed, feel free to watch the video below to get familiar with being a Bukka Partner.
            </Text>
          </View>
          <View style={[styles.centeredView, {}]}>
            <WebView 
              source={{uri: 'https://www.youtube.com/embed/RTy12YjfaBw?rel=0&autoplay=0&showinfo=0'}}
              style={[{
                width: 288 * RATIO_X,
                height: 162 * RATIO_Y,
                marginTop: 20 * RATIO_Y,
                marginBottom: 20 * RATIO_Y
              }]}
            />
          </View>
          <View style={[styles.centeredView]}>
            <Text style={{textAlign: "center", paddingLeft: 10 * RATIO_X, paddingRight: 10 * RATIO_X}}>
            You understand that, in order to use Bukka app, you accept the Bukka Driver Policy.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

