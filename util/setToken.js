import axios from 'axios';
import store from '../data_Container/store'

const setTokenHelper = () => {
  const state = store.getState()
  axios.defaults.headers.token = state.user.token;
};

export default setTokenHelper;