import { Platform } from "react-native";
export const baseUrl = Platform.OS === "android" ? 'http://192.168.1.100:8082' : 'http://localhost:8082'
export const apiUrl = 'https://api.cloudinary.com/v1_1/kingobi/image/upload';

export default {
  logo:
    "https://res.cloudinary.com/www-mybukka-com/image/upload/v1513294716/logo-light_xnxon0_rzghhp.png",
  loginurl: `${baseUrl}/api/v1/users/signin`,
  signupendpoint: `${baseUrl}/api/v1/users/signup`,
  forgot_password: `${baseUrl}/api/v1/users/resetpassword`,
};

export const mapStateToProps = state => state;

export const locationendpoint = uid =>
  `${baseUrl}/api/v1/${uid}/location`;
