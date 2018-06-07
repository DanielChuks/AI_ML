import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/navigation/Navigation";
import Index from './components/navigation/Index'
import store from "./data_Container/store";
import { Font } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    console.disableYellowBox = true;
    await Font.loadAsync({
      "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
      "Comfortaa-Light": require("./assets/fonts/Comfortaa-Light.ttf"),
      "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <Index store={store} /> : null;
  }
}
