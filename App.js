import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/index/Home";
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
    await Font.loadAsync({
      "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
      "Comfortaa-Light": require("./assets/fonts/Comfortaa-Light.ttf"),
      "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    console.log(store);
    return this.state.fontLoaded ? <Home store={store} /> : null;
  }
}
