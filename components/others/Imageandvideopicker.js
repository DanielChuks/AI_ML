import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
  ScrollView,
  TextInput,
  Modal
} from "react-native";
import styles, { colors } from "../../styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Imageandvideopicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.a
          }}
        >
          <View
            style={{
              height: 20
            }}
          />
          <View
            style={{
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Icon
              name="keyboard-backspace"
              size={24}
              color={colors.b}
              onPress={() => console.log("yh")}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Comfortaa-Bold",
                color: colors.b
              }}
            >
              DRIVERS LICENSE
            </Text>
            <Icon
              name="keyboard-backspace"
              size={24}
              color={"transparent"}
              onPress={() => console.log("yh")}
            />
          </View>
          <View style={{ flex: 2, backgroundColor: colors.b }} />
          <View style={{ flex: 3, padding: 15 }}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Comfortaa-Bold",
                color: "rgba(255,255,255,.8)",
                marginBottom: 10
              }}
            >
              TAKE A PHOTO OF YOUR DOCUMENT
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                marginBottom: -20
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Comfortaa-Regular",
                  color: "rgba(255,255,255,.8)"
                }}
              >
                To reduce the chances of your document being rejected: please
                ensure that allinformation is legible and all corners of the
                document are visible.Please verify the validity of your driving
                license against the national database.Your document may not be
                accepted if it has expired or is invalid.Please check that the
                name on your drivers license exactly matches Your
                Bukka-registered name
              </Text>
              <View
                style={{
                  height: 70,
                  //borderTopWidth: 1,
                  //borderColor: "rgba(0,0,0,.5)",
                  backgroundColor: colors.b,
                  marginLeft: -20,
                  marginRight: -20,
                  borderColor: "rgba(0,0,0,.5)",
                  borderWidth: 1,
                  padding: 10
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.a,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                  }}
                >
                  <Icon
                    name="camera-alt"
                    size={28}
                    color={colors.b}
                    onPress={() => console.log("yh")}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: "Comfortaa-Bold",
                      color: colors.b
                    }}
                  >
                    TAKE A PHOTO
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
