import {
  identify_user,
  signup
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
  signin(email, password) {
    dispatch(identify_user(email, password))
      .then(() => this.getLocationAuth())
      .catch(err => alert(err.response.data.error));
  },
  signup(_) {
    storage.dispatch(signup(_)).catch(e => alert(e.response.data.error));
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
    let broadcastlocation = this.broadcastlocation;
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
      console.log([latitude, longitude]);
      geoFire
        .set(uid, `[${latitude}, ${longitude}]`)
        .then(() => console.log("Working fine"))
        .catch(err => console.log(err));
    });
  },

  forgotPassword() {}
};

// const user = {
//   email: "test@test.com",
//   password: "qwerty123456"
// };
