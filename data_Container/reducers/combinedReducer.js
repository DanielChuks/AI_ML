import { combineReducers } from "redux";
import user from "./indentifyUserReducer";
import signUp from "./signUpReducer";
import singIn from './getAddressReducer'
import getAddress from "./getAddressReducer";
import getChefs from "./getChefReducer";
import updateCart from "./updateCartReducer";

export default combineReducers({
  signup: signUp,
  // address: getAddress,
  user: user
  // chef: getChefs,
  // cart: updateCart
});
