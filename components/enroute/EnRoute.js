import React, { Component } from "react";
import { apikey } from "../../lib/resources";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  Alert
} from "react-native";
import IconM from "react-native-vector-icons//MaterialIcons";
import { colors } from "react-native-elements";
import store from '../../data_Container/store';
import lib from "../../lib/lib";
import RateDelivery from '../others/RateDelivery';
import normalize from '../../styles/normalize';
import { MapView, Linking } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;

export default class BankDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: false,
      enroute: false,
      completed: false,
      showRating: false,
      location: this.props.screenProps.user.location
    }

    this.mapView = null;
    this.phoneCall = this.phoneCall.bind(this);
    this.openMap = this.openMap.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
    this.startDelivery = this.startDelivery.bind(this);
    this.completeDelivery = this.completeDelivery.bind(this);
    this.rateDelivery = this.rateDelivery.bind(this);
  }

  rateDelivery(rating) {
    this.setState({ showRating: false })
  }

  componentDidMount() {
    this.setState({ delivery: this.props.navigation.state.params })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.screenProps.user.confirmOrder && !nextProps.screenProps.user.deliveryStarted) {
      this.setState({ confirmed: true });
    }
    if(nextProps.screenProps.user.deliveryStarted) {
      this.setState({ enroute: true });
    }
    if(nextProps.screenProps.user.deliveryCompleted) {
      // Use React native modal instead of alert
      // {text: 'Rate this delivery', onPress: () => {this.props.navigation.navigate('Main');}},
      Alert.alert(
        'Delivered',
        'Delivery Completed!',
        [
          {text: 'Rate this delivery', onPress: () => {this.setState({ showRating: true});}},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        { cancelable: false } 
      )
      
    }
    this.setState({ location: nextProps.screenProps.user.location})
  }

  phoneCall() {
    const { phone } = this.state || '08036223826'
    Linking.openURL('tel:+2348036223826');
  }

  openMap() {
    const saddr = '100,101';
    const daddr = '100,102';
    const url = Platform.OS === 'ios' ? `maps://app?saddr=${saddr}&daddr=${daddr}` : `google.navigation:q=${daddr}`;
    // const url = Platform.OS === 'ios' ? `${scheme}${route}` : `${scheme}${latLng}`;
    Linking.openURL(url); 
  }

  confirmOrder() {
    const { deliveryId } = this.state.delivery;
    const customerId = this.state.delivery.delivery.user.uid;
    lib.confirmOrder(deliveryId, customerId);
  }

  startDelivery() {
    const { deliveryId } = this.state.delivery;
    const customerId = this.state.delivery.delivery.user.uid;
    lib.startDelivery(deliveryId, customerId);
  }

  completeDelivery() {
    const { deliveryId } = this.state.delivery;
    const customerId = this.state.delivery.delivery.user.uid;
    lib.completeDelivery(deliveryId, customerId);
  }



  render() {
    const { delivery } = this.props.navigation.state.params
    const {
      pickup_address,
      pickup_latitude,
      pickup_longitude,
      dropoff_address,
      dropoff_latitude,
      dropoff_longitude
    } = delivery.parameters;
    
    const { confirmed, enroute, showRating, location } = this.state;
    console.log(location, 'lott');
    // origin should change based on pick up and drop off
    const origin = { latitude: location[0], longitude: location[1]}
    // const origin = {latitude: 37.3318456, longitude: -122.0296002};
    // const destination = {latitude: parameters, longitude: parameters}
    const destination = {latitude: Math.floor(pickup_latitude), longitude: Math.floor(pickup_longitude)};
    const final = {latitude: Math.floor(dropoff_latitude), longitude: Math.floor(dropoff_longitude)};
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
          <Text style={{
            color: "white",
            fontSize: 20
          }}>
          { enroute ? "Delivery" : "Pick Up"}
          </Text>
        </View>
        <View style={[styles.content]} >
          <View>
            <View
              style={[styles.row]}
            >
              <View style={[styles.address]} >
                <Text style={{
                  marginBottom: 5,
                  fontWeight: "bold"
                }}>Kingobi</Text>
                <Text>No 20 Ajibola Crescent, Unity Close, Ogudu, Lagos</Text>
              </View>

              <View style={[styles.icon_right]}>
                <TouchableOpacity style={[styles.icon_right, {flex: 1}]}>
                  <IconM
                    name="navigation"
                    size={30}
                    color={"#1EBAD8"}
                    onPress={this.openMap}
                  />
                  <Text style={{marginTop: 20, fontWeight: "bold"}}> NAVIGATE </Text>
                </TouchableOpacity> 
              </View>
            </View>
            <View style={[
              styles.map,
            ]}>
              <MapView
                style={{
                  flex: 1
                }}
                provider={'google'}
                initialRegion={{
                  latitude: 37.3318456,
                  longitude: -122.0296002,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                ref={(ref) => { this.mapView = ref }}
              >
                <MapViewDirections
                  origin={ enroute ? destination : origin}
                  destination={enroute ? final : destination}
                  apikey={apikey}
                  onReady={(result) => {
                    this.mapView.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: (DEVICE_WIDTH / 20),
                        bottom: (200 / 20),
                        left: (DEVICE_WIDTH / 20),
                        top: (800 / 20),
                      }
                    });
                  }}
                  strokeWidth={5}
                  strokeColor="hotpink"
                />
                <MapView.Marker
                  coordinate={ enroute ? destination : origin}
                  title={"OBINNA"}
                  description={"My location to bukka"}
                />
                <MapView.Marker
                  coordinate={enroute ? final : destination}
                  title={"DESTINY"}
                  description={"My destination in bukka"}
                />
              </MapView>
            </View>
            <View
              style={[styles.row]}
            >
              <View style={[styles.address]} >
                <Text style={{
                  fontWeight: "bold"
                }}> { enroute ? "Drop off" : "Pick up"}</Text>
                <Text style={{
                  marginTop: 5,
                  fontSize: 20
                }}> +234-8036223826 </Text>
              </View>

              <View style={[styles.icon_right]}>
                <TouchableOpacity style={[styles.icon_right, {flex: 1}]}>
                  <IconM
                    name="local-phone"
                    size={30}
                    color={"#1EBAD8"}
                    onPress={this.phoneCall}
                  />
                </TouchableOpacity>
              </View>
            </View>
            { !enroute ?
              <View style={{
                padding: 10,
              }} >
                <Text style={{
                  fontWeight: "bold"
                }}>PICKUP INSTRUCTIONS</Text>
                <Text style={{
                  marginTop: 10
                }} >Parking in fron of the store, or possibly undground. Please comfirm the integrity and completeness of the order before leaving for delivery. </Text>
              </View>
              :
              <View />
            }
          </View>
          <View>
            { !confirmed ? 
              <TouchableOpacity
                style={[styles.row]}
                onPress={this.confirmOrder}
              >
                <View style={{
                  flexDirection: "row",
                  alignItems: "center"
                }} >
                  <IconM
                    name="check-circle"
                    size={30}
                    color={"#1EBAD8"}
                  />
                  <Text style={{
                    color: "#1EBAD8",
                    marginLeft: 10,
                    fontSize: 20,
                    fontWeight: "bold"
                  }}> CONFIRM ORDER </Text>
                </View>

                <View >
                  <TouchableOpacity>
                    <IconM
                      name="chevron-right"
                      size={30}
                      color={"#1EBAD8"}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              :
              <View/>
            }
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.save,
                {
                  backgroundColor: confirmed ? "#1EBAD8" : 'grey',
                }
              ]}
              onPress={ enroute ? this.completeDelivery : this.startDelivery}
            >
              <Text style={{
                fontSize: 25,
                color: "white",
                fontWeight: "bold"
              }}>
                { enroute ? "COMPLETE DELIVERY" : "START DELIVERY"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {showRating && <RateDelivery rateDelivery={this.rateDelivery} />}
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
    flex: 1,
  },
  save: {
    width: "100%",
    padding: 10,
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 20,
    borderColor: "white",
  },
  row: {
    width: DEVICE_WIDTH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20
  },
  address: {
    flex: 3 / 4,
    justifyContent: 'space-around',
  },
  icon_right: {
    flex: 1/ 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentUp: {
    
  },
  contentBottom: {

  },
  map: {
    height: 130,
    backgroundColor: 'red',
    width: DEVICE_WIDTH,
  }

});
