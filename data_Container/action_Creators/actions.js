import axios from "axios";
import ajx from "../../lib/resources";
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
export const identify_user = (email, password) => ({
  type: "IDENTIFYING_USER",
  payload: axios.post(ajx.loginurl, { email, password })
});
// //addcard
// export const addcard = response => ({
//   type: "ADD_CARD",
//   payload: response
// });
// //get user card details
// export const updating_user_info = uid => ({
//   type: "UPDATING_USER_INFORMATION",
//   payload: axios.get(ajx.carddtlsendpoint + uid)
// });
// //forgot password
// export const forgot_password = email => {
//   try {
//     const result = axios.post(ajx.forgot_password, {
//       email,
//       link: ajx.link
//     });
//     console.info(result);
//     return {
//       type: "FORGOT_PASSWORD",
//       payload: result
//     };
//   } catch (e) {
//     console.log(e, error.response);
//   }
// };
// //forgot Password
// // export const forgot_password=(email)=>({
// // 	type:"FORGOT_PASSWORD",
// // 	payload:axios({
// // 		method: 'POST',
// // 		url: ajx.forgot_password,
// // 		headers: { 'Content-Type': 'application/json' },
// // 		body:JSON.stringify(
// // 			 { email,
// // 				link:ajx.link }
// // 			 )
// // 	})
// // })
// //Reauthenticate Card
// export const time_to_reauthenticate = _ => ({
//   type: "TIME_TO_REAUTHENTICATE",
//   payload: _
// });
// //reauthentication confirmation
// export const reauthenticate = _ => ({
//   type: "REAUTHENTICATE_CARD",
//   payload: _
// });
// //card transction error
// export const clear_card_error = () => ({
//   type: "CLEAR_CARD_ERROR"
// });
// //user region
// export const fetch_region = region => ({
//   type: "FETCH_REGION",
//   payload: { region }
// });
// //user address
// export const fetch_address = Location => ({
//   type: "FETCH_ADDRESS",
//   payload: { Location }
// });
// //fetch list of chefs
// export const fetch_chef = _ => ({
//   type: "GET_CHEFS",
//   payload: axios.get(ajx.chefendpoint + _)
// });
// //organise chefs into cuisine
// export const chef_Cuisine = _ => ({
//   type: "GET_CHEF_AND_CUISINE",
//   payload: _
// });
// //get chef update
// export const get_chef = chef => ({
//   type: "GET_CHEFS_UPDATE",
//   payload: chef
// });
// //select cuisine
// export const select_cuisine = chef => ({
//   type: "SELECT_CUISINE",
//   payload: chef
// });

// //delete cart
// export const delete_cart = () => ({
//   type: "DELETE_CART"
// });

// //update_cart
// export const update_cart = response => ({
//   type: "UPDATE_CART",
//   payload: response
// });

// //add new transaction
// export const transaction = _ => ({
//   type: "ADD_NEW_TRANSACTION",
//   payload: _
// });

// export const delivery_info = _ => ({
//   type: "DELIVERY_NOTE",
//   payload: _
// });

// //place order
// export const order = _ => ({
//   type: "ORDER_STATUS",
//   payload: Promise.all(_)
// });

// //clear transaction object
// export const cleartransaction = () => ({
//   type: "CLEAR_TRANSACTION",
//   payload: []
// });

// //order history
// export const orderhistorypending = () => ({
//   type: "FETCH_ORDER_HISTORY_PENDING"
// });

// export const orderhistoryfulfilled = payload => ({
//   type: "FETCH_ORDER_HISTORY_FULFILLED",
//   payload
// });

// export const orderhistoryrejected = payload => ({
//   type: "FETCH_ORDER_HISTORY_REJECTED",
//   payload
// });

// export const signout = () => ({
//   type: "SIGN_OUT"
// });
