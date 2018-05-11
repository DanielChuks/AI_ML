import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { mapStateToProps } from "../../lib/resources";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import UploadDocument from "../authentication/Document";
import { Constants, Location, Permissions } from "expo";
import lib from "../../lib/lib";

const AuthenticationNavigation = StackNavigator({
  // uploaddocument: {
  //   screen: UploadDocument,
  //   navigationOptions: {
  //     header: false
  //   }
  // },
  signin: {
    screen: SignIn,
    navigationOptions: {
      header: false
    }
  },
  signup: {
    screen: SignUp,
    navigationOptions: {
      header: false
    }
  }
});

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null
    };
    console.log(this.props);
  }

  render() {
    const { user, address, chef } = this.props;
    return <AuthenticationNavigation screenProps={this.props} />;
  }
}

export default connect(mapStateToProps)(Root);

const myStyles = StyleSheet.create({
  fullScreen: {
    flex: 1
  }
});
