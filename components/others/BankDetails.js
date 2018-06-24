import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons//MaterialIcons";
import Inputs from "./Inputs";
import { colors } from "react-native-elements";
import banks from "../../constants/banks";
import lib from "../../lib/lib";
import BankDisplay from "../others/RadioSelect";
import style from "../../styles/style";
import normalize from '../../styles/normalize';
import PreLoader from "./PreLoader";
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;

export default class BankDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanks: false,
      saving: false
    };
    this.toggleBanks = this.toggleBanks.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.screenProps.user.bankDetails) {
      this.setState({ saving: false }, () => {
        alert('Successfully updated banking details!')
      })
    }
    if(nextProps.screenProps.user.error) {
      this.setState({ saving: false }, () => {
        alert('Could not update banking details, please try again later!')
      })
    }
  }

  getPicker = ref => this.picker = ref;

  toggleBanks() {
    this.setState({ showBanks: !this.state.showBanks })
  }

  selectBank(bank) {
    this.setState({ bank });
  }

  save() {
    const { bank, account, name } = this.state;
    if (!bank) {
      alert('Please select a bank!');
    }
    else if (!account) {
      alert('Please provide the account number!');
    }
    else if (account.length !== 10) {
      alert('Please provide a valid account number!');
    }
    else if (!name) {
      alert('Please provide the account name!');
    }else{
      const { uid } = this.props.screenProps.user.user;
      this.setState({ saving: true }, () => {
        lib.addBanking({ bank, account, name }, uid);
      })
    }
  }

  render() {
    const { user } = this.props.screenProps;
    const { showBanks, saving } =  this.state;
    return (
      <View
        style={[
          styles.container,
          {
            position: "relative"
          },
          { ...this.props.style }
        ]}
      >
      <View style={{backgroundColor: "grey", width: "100%", height: 30 * RATIO_Y}}/>
        <View style={[styles.header]} >
          <TouchableOpacity style={[
              styles.back,]
            }>
              <IconM
                name="arrow-back"
                size={30}
                color={colors.grey3}
                onPress={() => {this.props.navigation.goBack()}}
              />
          </TouchableOpacity>
          <Text style={{
            color: "white",
            fontSize: 20
          }}>
            Add Bank Details
          </Text>
        </View>
        <View style={[styles.content]} >
          <View>
            <Inputs
              text="Account Name"
              isPassword={false}
              onChangeText={name => this.setState(() => ({ name }))}
              value={this.state.name}
              placeholderTextColor={"black"}
              labelColor = {colors.grey0}
              borderBottomColor={"black"}
              style={{
                width: DEVICE_WIDTH - 20
              }}
            />
            <Inputs
              text="Account Number"
              isPassword={false}
              onChangeText={account => this.setState(() => ({ account }))}
              value={this.state.account}
              placeholderTextColor={"black"} 
              labelColor = {colors.grey0}
              borderBottomColor={"black"}
              style={{
                width: DEVICE_WIDTH - 20
              }}
            />
            <TouchableOpacity activeOpacity={0.3} style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 50,
              opacity: 1,
            }}>
              <Text style={[
                style.input,
                style.widtha,
                {
                  fontFamily: "Comfortaa-Regular",
                  marginTop: 50,
                }
              ]}
              >
                Select Your Bank
              </Text>
              <Icon
                name={showBanks ? "chevron-up" : "chevron-down"}
                size={25}
                color={colors.grey3}
                onPress={this.toggleBanks}
              />
            </TouchableOpacity>
            { showBanks &&
              (<ScrollView style={{
                height: 100,
                borderColor: 'grey',
                borderWidth: 1,
              }}>
                {banks.map((bank) => (
                  <BankDisplay
                    name={this.state.bank === bank.value ? 'radio-button-checked': 'radio-button-unchecked'}
                    text={bank.label}
                    onPress={() => { this.selectBank(bank.value)}}
                    marginTop={0}
                    key={bank.label}
                    style={{
                      padding: 10,

                    }}
                  />
                ))}
              </ScrollView>)
            }
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              styles.save
            ]}
            onPress={this.save}
          >
            <Text style={{
              fontSize: 25,
              color: "white",
              fontWeight: "bold"
            }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
        { saving && <PreLoader text={'Saving Account Details...'} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header:{
    width: "100%",
    height: 60,
    backgroundColor: "black",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    flex: 1,
    paddingTop: 20
  },
  save: {
    width: "100%",
    padding: 10,
    height: "auto",
    backgroundColor: "#1EBAD8",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 20,
    borderColor: "white",
  },
  back: {
    position: "absolute",
    height: 60,
    left: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
