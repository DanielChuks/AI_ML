import { Platform } from "react-native";
import {
  upload,
  identify_user,
  signup,
  forgot_password,
  refresh_page,
  banking,
  confirmOrder,
  startDelivery,
  completeDelivery
} from "../data_Container/action_Creators/actions";
import storage from "../data_Container/store";
import GeoFire from "geofire";
import firebase from "../config/firebaseClient";
import axios from "axios";
import { locationendpoint } from "./resources";
import { Constants, Location, Permissions } from "expo";

const state = storage.getState();
const dispatch = storage.dispatch;
const geoFire = new GeoFire(firebase.database().ref(`driversGeofire`));
const uid = state.user.user.user ? state.user.user.user.uid : "...";
const locationurl = locationendpoint(uid);

export default {
  confirmOrder(deliveryId, customerId) {
    storage.dispatch(confirmOrder(deliveryId, customerId))
  },

  startDelivery(deliveryId, customerId) {
    storage.dispatch(startDelivery(deliveryId, customerId))
  },

  completeDelivery(deliveryId, customerId) {
    storage.dispatch(completeDelivery(deliveryId, customerId))
  },

  addToStore(key, value) {
    storage.dispatch({
      type: "ADD_TO_STORE",
      payload: { key, value }
    })
  },
  upload(data, uid) {
    storage.dispatch(upload(data, uid))
  },
  signin(email, password) {
    storage.dispatch(identify_user(email, password))
      // .then(() => this.getLocation())
      // .catch(err => alert(err.response.data.error));
  },
  signOut() {
    storage.dispatch({
      type: 'SIGN_OUT',
      payload: ''
    })
  },
  signup(user) {
    storage.dispatch(signup(user)).catch(e => dispatch({
      type: "SIGNUP_ERROR",
      payload: e.response.data.error
    }));
  },
  locate: async (position) => {

    await axios({
      url: locationurl,
      method: "POST",
      body: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });
  },
  getLocation() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      alert(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      this._getLocationAsync();
    }
  },
  _getLocationAsync: async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    alert('Keep your app open to get your location tracked!')
    const options = {
      enableHighAccuracy: true,
      timeInterval: 5000,
      distanceInterval: 0.001
    };
    Location.watchPositionAsync(options, position => {
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();
      const { uid } = storage.getState().user.user
      storage.dispatch({
        type: "ADD_TO_STORE",
        payload: { key: 'location', value: [Math.floor(latitude), Math.floor(longitude)] }
      });
      // Remember to handle firebase rules for writing to /driversGeofire
      geoFire
        .set(uid, [Math.floor(latitude), Math.floor(longitude)])
        .then(() => console.log("Working fine"))
        .catch(err => console.log(err, 'Thisisi is the errorr .........'));
    });
  },

  refresh(page) {
   storage.dispatch(refresh_page(page));
  },

  forgotPassword(email) {
    storage.dispatch(forgot_password(email)).catch(e => alert(e));
  },

  addBanking(bankDetails, uid) {
    storage.dispatch(banking(bankDetails, uid)).catch((e) => alert(e));
  },
};

