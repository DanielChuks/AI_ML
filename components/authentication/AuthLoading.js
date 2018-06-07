import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import styles from '../../styles/style';
import { isSignedIn } from '../../util/checkAuth'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    AsyncStorage.setItem('IS_MOUNTED', 'false')
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.screenProps.user.isAuthenticated) {
      this._bootstrapAsync();
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const signedIn = await isSignedIn();
    AsyncStorage.setItem('IS_MOUNTED', 'true')
    console.log(signedIn, 'again')

    if (signedIn ===  'pending') {
      this.props.navigation.navigate('DocumentUpload');
    }
    if (signedIn ===  'inprogress') {
      this.props.navigation.navigate('pendingAproval');
    }
    if (signedIn ===  'approved') {
      this.props.navigation.navigate('Main');
    }
    if (signedIn ===  false || signedIn ===  'false') {
      this.props.navigation.navigate('Auth');
    }
    if (signedIn ===  'waiting') {
      this.props.navigation.push('AuthLoading');
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}