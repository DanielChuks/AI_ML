import axios from "axios";
import ajx from "../../lib/resources";
import { baseUrl } from '../../lib/resources'
import setTokenHelper from '../../util/setToken'
//import request from 'request'

//signup
export const signup = data => ({
  type: "SIGN_UP",
  payload: axios({
    method: "post",
    url: ajx.signupendpoint,
    data
  })
});
//login
export const identify_user = (email, password) => {
  const result = axios.post(ajx.loginurl, { email, password })
  return ({
    type: "IDENTIFYING_USER",
    payload: result,
  })
};
export const forgot_password = email => {
  try {
    const result = axios.post(ajx.forgot_password, {
      email,
    });
    console.info(result);
    return {
      type: "FORGOT_PASSWORD",
      payload: result
    };
  } catch (e) {
    console.log(e, error.response);
  }
};

export const refresh_page = page => {
  return {type: page, payload: {}}
}

export const banking = (bankDetails, uid) => {
  setTokenHelper();
  const result = axios.put(`${baseUrl}/api/v1/drivers/${uid}/details`, bankDetails)
  return {
    type: "BANKING",
    payload: result
  }
}

export const upload = (data, uid) => {
  setTokenHelper();
  const result = axios.post(`${baseUrl}/api/v1/drivers/${uid}/details`, data)
  return {
    type: 'UPLOAD_FILES',
    payload: result
  }
}

export const signout = () => 
  firebase.auth().signOut().then(() => {
    return {
      type: 'SIGN_OUT',
      payload: '',
    }
  }).catch((error) => {
    console.log(error, 'sing out ...not working')
  });
