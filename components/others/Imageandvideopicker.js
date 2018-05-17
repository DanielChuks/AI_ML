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
      modalVisible: true,
      documentType: this.props.navigation.state.params.documentType
    };
  }
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}
      >
        <View style={{backgroundColor: "grey", width: "100%", height: 25}}/>
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
              {this.state.documentType}
            </Text>
            <Icon
              name="keyboard-backspace"
              size={24}
              color={"transparent"}
              onPress={() => console.log("yh")}
            />
          </View>
          <Image
            source={require('../../assets/images/dl.png')}
            style={[{marginLeft: -10}]}
          />
          <View style={{ flex: 3, padding: 20 }}>
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Comfortaa-Regular",
                  color: "rgba(255,255,255,.8)",
                  marginTop: 20
                }}
              >
                To reduce the chances of your document being rejected: please
                ensure that allinformation is legible and all corners of the
                document are visible. 
                {this.state.documentType == 
                  "DRIVERS LICENSE" && " Please verify the validity of your driving"
                + " license against the national database."} Your document may not be
                accepted if it has expired or is invalid. Please check that the
                name on your document exactly matches Your
                Bukka-registered name
              </Text>
            </View>
            <View
                style={{
                  height: 100,
                  marginLeft: -20,
                  marginRight: -20,
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width:"80%",
                    backgroundColor: colors.a,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,

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
                <TouchableOpacity
                  style={{
                    width:"80%",
                    backgroundColor: colors.a,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: "Comfortaa-Bold",
                      color: colors.b
                    }}
                  >
                    UPLOAD FROM GALLERY
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
    );
  }
}