import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import SignIn from "../authentication/SignIn";
import SignUp1 from "../authentication/SignUp1";
import SignUp2 from "../authentication/SignUp2";
import Home from "../index/Home";
import Camera from "../others/camera";
import pendingAproval from '../others/pendingAproval';
import HistoryHome from "../history/home";
import DocumentUpload from "../others/DocumentUpload";
import BankDetails from "../others/BankDetails"
import EnRoute from "../enroute/EnRoute";
import AuthLoadingScreen from '../authentication/AuthLoading';
import RateDelivery from '../others/RateDelivery';
import RatingWidget from '../others/Rating';
import IncomingRequest from '../others/IncomingRequest';


export const AuthNavigation = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      header: false
    }
  },
  register1: {
    screen: SignUp1,
    navigationOptions: {
      header: false
    }
  },
  register2: {
    screen: SignUp2,
    navigationOptions: {
      header: false
    }
  },
  signin: {
    screen: SignIn,
    navigationOptions: {
      header: false
    }
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })


export const MainNavigation = createStackNavigator({
  historyhome : {
    screen: HistoryHome,
    navigationOptions: {
      header: false
    }
  },
  BankDetails : {
    screen: BankDetails,
    navigationOptions: {
      header: false
    }
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

export const ModalNavigators = createStackNavigator({
  license: Camera,
})

export const RootNavigation = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigation,
  DocumentUpload,
  EnRoute,
  pendingAproval,
  RateDelivery,
  Main: MainNavigation,
})



const myStyles = StyleSheet.create({
  fullScreen: {
    flex: 1
  }
});
