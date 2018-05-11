export default {
  logo:
    "https://res.cloudinary.com/www-mybukka-com/image/upload/v1513294716/logo-light_xnxon0_rzghhp.png",
  loginurl: "https://bukkadelivery.herokuapp.com/api/v1/users/signin",
  signupendpoint: "https://bukkadelivery.herokuapp.com/api/v1/users/signup"
};

export const mapStateToProps = state => state;

export const locationendpoint = uid =>
  `https://bukkadelivery.herokuapp.com/api/v1/${uid}/location`;
