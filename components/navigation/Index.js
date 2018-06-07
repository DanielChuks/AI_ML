import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../lib/resources";
import { RootNavigation } from './Navigation'
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      signedIn: false,
      checkedSignIn: false
    };
  }



  render() {
    return <RootNavigation screenProps={this.props} />;
  }
}

export default connect(mapStateToProps)(Root);