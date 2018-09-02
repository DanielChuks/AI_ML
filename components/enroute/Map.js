import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";

import getCoordinates from "../../helpers/getCoordinates";
export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        provider={'google'}
        initialRegion={{
          latitude: 6.5244,
          longitude: 3.3792,
          latitudeDelta: 0.0922 / 2,
          longitudeDelta: 0.0421 / 2
        }}
      />
    );
  }
}
// Change the above to something close to location map