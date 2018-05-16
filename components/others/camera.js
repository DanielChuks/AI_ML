import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
  ScrollView,
  TextInput
} from "react-native";
import styles, { colors } from "../../styles/style";
import Button from "../others/Button";
import rsc from "../../lib/resources";
import Img from "../others/Images";
import { ImagePicker } from "expo";

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this._pickImage = this._pickImage.bind(this);
    this._runCamera = this._runCamera.bind(this);
  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { status_roll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === "granted", hasCameraRollPermission: status_roll === "granted"});
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _runCamera = async () => {
    let result = ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
  };

  async componentDidMount() {
    this._runCamera();
  }

  render() {
    let { image } = this.state;
    return (
      //<ScrollView>
      <View
        style={[
          {
            backgroundColor: colors.aa,
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }
        ]}
      >
        <View style={{ marginBottom: 100 }}>
          <Img
            source={{ uri: rsc.logo }}
            style={[{ width: 200, height: 75, marginBottom: 10 }]}
          />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontFamily: "Comfortaa-Bold",
                fontSize: 18
              }}
            >
              DRIVER
            </Text>
          </View>
        </View>
        <Button
          text={"Vehicles registration papers"}
          textColor={[{ color: colors.a, fontFamily: "Comfortaa-Bold" }]}
          event={this._pickImage}
          button={[
            {
              backgroundColor: "#fff",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              margin: 0,
              shadowColor: "#000000",
              shadowRadius: 5,
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 1
              },
              margin: 10,
              width: 230
            },
            styles.button__Long
          ]}
        />
        <Button
          text={"Drivers Licensce"}
          textColor={[{ color: colors.a, fontFamily: "Comfortaa-Bold" }]}
          event={this._pickImage}
          button={[
            {
              backgroundColor: "#fff",
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              margin: 0,
              shadowColor: "#000000",
              shadowRadius: 5,
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 1
              },
              margin: 10,
              width: 230
            },
            styles.button__Long
          ]}
        />

        <View
          style={{
            height: 150,
            width: "100%",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          )}
        </View>
      </View>
      //</ScrollView>
    );
  }
}
