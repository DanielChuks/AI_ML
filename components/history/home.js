import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import SwitchToggle from 'react-native-switch-toggle';
import Icon from "react-native-vector-icons/Entypo";
import IconF from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialIcons";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';
import Dimensions from "Dimensions";
import io from 'socket.io-client';
import { colors } from "../../styles/style";
import lib from '../../lib/lib';
import bugg from "../../assets/images/car.jpg";
import Background from "../others/Background";
import Widget from "../others/Widget";
import RatingWidget from "../others/RatingWidget";
import { baseUrl } from '../../lib/resources';
import EarningsWidget from "../others/EarningsWidget";
import IncomingRequest from "../others/IncomingRequest";
import Profile from "./Profile";
import store from '../../data_Container/store';
import FAQ from "../others/FQA";
import normalize from '../../styles/normalize';
import * as mock from './mock.json';
const stats = mock.default;
const FAQwrapper = Animatable.createAnimatableComponent(FAQ);
const left = Dimensions.get("window").width + 50;
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH, RATIO_F } = normalize;

export default class HistoryHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      online: false,
      page: "home",
      showFAQ: false,
      menu: false,
      lastTrip: {},
      tripsToday: {},
      totalTrips: 0,
      profilePicture: this.props.screenProps.user.user.photoURL || '',
      rating: this.props.screenProps.user.user.rating || {},
      displayName: this.props.screenProps.user.user.displayName || '',
      incomingRequest: false,
      acceptingRequest: false
    };
    
    this.socket = io.connect(baseUrl);
    this.toggle = this.toggle.bind(this)
    this.renderContent = this.renderContent.bind(this);
    this.home = this.home.bind(this);
    this.earnings = this.earnings.bind(this);
    this.account = this.account.bind(this);
    this.rating = this.rating.bind(this);
    this.navColors = this.navColors.bind(this);
    this.faq = this.faq.bind(this);
    this.slide = this.slide.bind(this)
    this.handleViewRef = this.handleViewRef.bind(this)
    this.signOut = this.signOut.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.slideMenu = this.slideMenu.bind(this);
    this.goOnline = this.goOnline.bind(this);
    this.accept = this.accept.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    this.socket.on('online', () => {
      this.socket.on('request', (delivery) => {
        this.setState({ incomingRequest: true, delivery: delivery }, () => {
          lib.addToStore('currentDelivery', delivery)
        });
      })

      this.socket.on('driver', (delivery) => {
        console.log('New driver recieved')
      })
      console.log("I went online");
      lib.getLocation();
      // init geofire
      // this.geofireInterval = setInterval(() => {
      //   console.log('Ima')
      //   lib.getLocation();
      // },
      //   1000
      // )
    })
    if (this.props.screenProps.user.user.deliveries){
      const { deliveries } = this.props.screenProps.user.user;
      this.setState({
        trips: this.props.screenProps.user.user.deliveries,
        totalTrips: Object.keys(deliveries).length
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.screenProps.user.isAuthenticated){
      this.props.navigation.navigate('AuthLoading')
    }
  }

  goOnline() {
    const { token, user } = store.getState().user
    console.log(token)
    this.socket.emit('online', { token });
  }

  goOffline() {
    this.socket.emit('offline', {online: false});
    // clearInterval(this.geofireInterval);
  }

  accept() {
    this.setState({
      acceptingRequest: true,
      incomingRequest: false
    }, 
    () => {
      console.log(this.state.delivery)
      this.socket.emit('accepted', this.state.delivery);
      this.props.navigation.navigate('EnRoute', { delivery: this.state.delivery });
    });
  }

  showMenu() {
    this.setState({ menu: !this.state.menu},
      () => {
        this.slideMenu()
      }
    )
  }

  slideMenu(){
    this.menu.transitionTo({
       top: this.state.menu ? 110 * RATIO_Y : 30 * RATIO_Y,
      }, 300)
  }

  signOut() {
    lib.signOut();
  }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle, online: !this.state.online }, () => {
      if (this.state.toggle) {
        this.goOnline();
      } else {
        this.goOffline();
      }
    });
  }

  home() {
    this.setState({ page: "home" })
  }

  rating() {
    this.setState({ page: "rating" })
  }

  earnings() {
    this.setState({ page: "earnings" })
  }

  account() {
    this.setState({ page: "account" })
  }

  navColors() {
    const { page } = this.state;
    return (
      {
        home: page === "home"? "#04808c" : "white",
        earnings: page === "earnings"? "#04808c" : "white",
        rating: page === "rating"? "#04808c" : "white",
        account: page === "account"? "#04808c" : "white"
      }
    )
  }

  renderContent() {
    const page = this.state.page;
    switch(page) {
      case 'account':
          return (
            <Profile
              averageRating={this.state.rating.average || '0.0'}
              src = {this.state.profilePicture}
              displayName={this.state.displayName}
              totalTrips={this.state.totalTrips}
              driverDuration={this.state.driverDuration}
              durationUnint={this.state.durationUnint}
            />
          );
      case "earnings":
          return (
            <EarningsWidget
              title = {"LAST TRIP"}
              subTitle1 = {"7:00AM"}
              value1 = {"Bukka"}
              subTitle2 = {"N1234.00"}
              value2 = {"ESTIMATED NET"}
              stats={stats}
            />
          );
      case "rating":
          return (
            <RatingWidget
              averageRating={this.state.rating.average}
              totalTrips={this.state.totalTrips}
              ratedTrips={this.state.rating.ratedTrips}
              fiveStars={this.state.rating.fiveStars}
            />
          );
      default:
          return (
            <View>
              <Widget
                title = {"LAST TRIP"}
                subTitle1 = {this.state.lastTrip.time}
                value1 = {this.state.lastTrip.customerName}
                subTitle2 = {this.state.lastTrip.earning ? `N${this.state.lastTrip.earning}.00` : "N0.00"}
                value2 = {"ESTIMATED NET"}
              />
              <Widget
                title = {"TODAY'S TOTAL"}
                subTitle1 = {this.state.tripsToday.hours}
                value1 = {this.state.tripsToday.count ? + `${this.state.tripsToday.count} trips` : "No trips"}
                subTitle2 = {this.state.tripsToday.earnings ? `N${this.state.tripsToday.earnings}.00`: "N0.00"}
                value2 = {"ESTIMATED NET"}
              />
            </View>
          );
    }
  }

  slide(){
    this.view.transitionTo({
       left: this.state.showFAQ ? 0 : left,
      }, 800)
  }

  faq() {
    this.setState({showFAQ : !this.state.showFAQ},
      () => {
        this.slide()
      }
    )
  }

  cancel() {
    console.log(this.state.incomingRequest)
    this.setState({
      delivery: null,
      acceptingRequest: false,
      incomingRequest: !this.state.incomingRequest
    }, 
    () => {this.socket.emit('rejected')});
  }

  handleViewRef = ref => this.view = ref;
  handleMenuRef = ref => this.menu = ref;

  render() {
    const { user } = this.props.screenProps;
    const navColors = this.navColors()
    return (
      <View
        style={[
          {
            backgroundColor:'#9C1C26',
            flex: 1,
          }
        ]}
      >
        <FAQwrapper
          onPress={this.faq}
          ref={this.handleViewRef}
          style={[
            styles2.container
          ]}
          {...this.props}
        />
        <View style={{backgroundColor: "grey", width: "100%", height: 30 * RATIO_Y}}/>
        <View style={{
          height: 80 * RATIO_Y,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 40 * RATIO_X,
          paddingRight: 40 * RATIO_X,
          backgroundColor:"black",
          zIndex: 5
        }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <SwitchToggle
              containerStyle={{
                width: 80 * RATIO_X,
                height: 40 * RATIO_Y,
                borderRadius: 30,
                padding: 5,
                marginRight: 20 * RATIO_X
              }}
              backgroundColorOn='white'
              backgroundColorOff='white'
              circleStyle={{
                width: 30 * RATIO_X,
                height: 30 * RATIO_Y,
                borderRadius: 15
              }}
              switchOn={this.state.toggle}
              onPress={this.toggle}
              circleColorOff='grey'
              circleColorOn='#04808c'
              duration={500}
            />
            <Text style={{color: colors.b, fontFamily: "Comfortaa-Bold",}}>
              {this.state.online? "ONLINE" : "OFFLINE"}
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              name="dots-three-vertical"
              size={30 * RATIO_F}
              color={colors.b}
              onPress = {this.showMenu}
              style={{marginLeft: -10 * RATIO_X}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="help-with-circle"
              size={30 * RATIO_F}
              color={colors.b}
              onPress = {this.faq}
              style={{marginLeft: 10 * RATIO_X}}
            />
          </TouchableOpacity>
        </View>
        <Animatable.View style={{
            height: 80 * RATIO_Y,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 40 * RATIO_X,
            paddingRight: 40 * RATIO_X,
            backgroundColor:"grey",
            position: 'absolute',
            zIndex: 3,
            top: 30 * RATIO_Y
          }}
          ref={this.handleMenuRef}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text
              style={{color: colors.b, fontFamily: "Comfortaa-Bold",}}
              onPress={() => {
                this.showMenu()
                this.signOut()
              }}
            >
              SIGNOUT
            </Text>
            <Text
              style={{color: colors.b, fontFamily: "Comfortaa-Bold",}}
              onPress={() => {
                this.showMenu()
                this.props.navigation.navigate('BankDetails')
              }}
            >
              BANKING
            </Text>
            <Text
              style={{color: colors.b, fontFamily: "Comfortaa-Bold",}}
              onPress={() => {
                this.showMenu()
                this.props.navigation.navigate('BankDetails')
              }}
            >
              CASH-OUT
            </Text>
          </View>
        </Animatable.View>
        <View style={{
          flex: 1,
          justifyContent: "flex-end"
        }}>
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: 'flex-end'
            }}
          >
           {this.renderContent()}
          </View>
          <Background bugg={bugg}/>
          <View style={{
            height: 100 * RATIO_Y,
            backgroundColor: "black",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}>
            <View
              style={{alignItems: "center", justifyContent: "center"}}
            >
              <Icon
                name="home"
                size={30 * RATIO_F}
                color={navColors.home}
                onPress={this.home}
              />
              <Text style={{color: navColors.home}} onPress={this.home}>HOME</Text>
            </View>
            <View
              style={{alignItems: "center", justifyContent: "center"}}
            >
              <IconF
                name="money"
                size={30 * RATIO_F}
                color={navColors.earnings}
                onPress={this.earnings}
              />
              <Text style={{color: navColors.earnings}} onPress={this.earnings}>EARNINGS</Text>
            </View>
            <View
              style={{alignItems: "center", justifyContent: "center"}}
            >
              <IconM
                name="stars"
                size={30 * RATIO_F}
                color={navColors.rating}
                onPress={this.rating}
              />
              <Text style={{color: navColors.rating}} onPress={this.rating}>RATINGS</Text>
            </View>
            <View
              style={{alignItems: "center", justifyContent: "center"}}
            >
              <IconMC
                name="account"
                size={30 * RATIO_F}
                color={colors.b}
                onPress={this.account}
              />
              <Text style={{color: navColors.account}} onPress={this.account}>ACCOUNT</Text>
            </View>
          </View>
        </View>
        { this.state.incomingRequest && 
          <View style={[styles2.request_container, {
            backgroundColor: "black",
            zIndex: 2050,
            opacity: 0.5
          }]} />
        }
        { this.state.incomingRequest &&
          <IncomingRequest
            style={[styles2.request_container
            ]}
            cancel={this.cancel}
            accept={this.accept}
            acceptingRequest={this.state.acceptingRequest}
          />
        }
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    height: "100%",
    width: "102%",
    justifyContent: "space-between",
    position: "absolute",
    left: left,
    top: 0,
    zIndex: 2000,
  },
  request_container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50 * RATIO_Y,
    position: "absolute",
    zIndex: 3000,
  },
});
