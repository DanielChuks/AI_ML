import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

import styles from '../../styles/style';
import { isSignedIn } from '../../util/checkAuth'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    AsyncStorage.setItem('IS_MOUNTED', 'false');
    AsyncStorage.removeItem('verification');
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
    else if (signedIn ===  'inprogress') {
      this.props.navigation.navigate('pendingAproval');
    }
    else if (signedIn ===  'approved') {
      this.props.navigation.navigate('Main');
    }
    else if (signedIn ===  false || signedIn ===  'false') {
      this.props.navigation.navigate('Auth');
    }
    else if (signedIn ===  'waiting') {
      this.props.navigation.navigate('AuthLoading');
    }
    else {
      this.props.navigation.navigate('AuthLoading');
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