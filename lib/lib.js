import {
  upload,
  identify_user,
  signup,
  forgot_password,
  refresh_page,
} from "../data_Container/action_Creators/actions";
import storage from "../data_Container/store";
import GeoFire from "geofire";
import firebase from "../config/firebaseClient";
import axios from "axios";
import { locationendpoint } from "./resources";
import expo from "expo";
import { Constants, Location, Permissions } from "expo";

const state = storage.getState();
const dispatch = storage.dispatch;
const geoFire = new GeoFire(firebase.database().ref(`driversGeofire`));
const uid = state.user.user.user ? state.user.user.user.uid : "";
const locationurl = locationendpoint(uid);

export default {
  upload(data, uid) {
    storage.dispatch(upload(data, uid))
  },
  signin(email, password) {
    storage.dispatch(identify_user(email, password))
      // .then(() => this.getLocationAuth())
      // .catch(err => alert(err.response.data.error));
  },
  signOut() {
    storage.dispatch({
      type: 'SIGN_OUT',
      payload: ''
    })
  },
  signup(user) {
    storage.dispatch(signup(user)).catch(e => alert(e.response.data.error));
  },
  async locate(position) {
    await axios({
      url: locationurl,
      method: "POST",
      body: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });
  },
  getLocationAuth() {
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
    }
    const options = {
      enableHighAccuracy: true,
      timeInterval: 5000,
      distanceInterval: 0.001
    };
    Location.watchPositionAsync(options, position => {
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();
      geoFire
        .set(uid, `[${latitude}, ${longitude}]`)
        .then(() => console.log("Working fine"))
        .catch(err => console.log(err));
    });
  },

  refresh(page) {
   storage.dispatch(refresh_page(page));
  },

  forgotPassword(email) {
    storage.dispatch(forgot_password(email)).catch(e => alert(e));
  },
};

// const user = {
//   email: "test@test.com",
//   password: "qwerty123456"
// };
