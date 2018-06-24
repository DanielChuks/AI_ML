import lib from '../lib/lib';
import storage from '../data_Container/store';
import { identify_user } from '../data_Container/action_Creators/actions'
import { AsyncStorage } from "react-native";

export const USER_KEY = "authkey";
export const USER_SECRETE = 'secrete';

export const onSignIn = (key, secrete, verification) => AsyncStorage.multiSet(
  [[USER_KEY, key], [USER_SECRETE, secrete], ['IS_MOUNTED', 'true'], ['verification', verification]]
);

export const onSignOut = () => AsyncStorage.multiRemove([USER_KEY, USER_SECRETE, 'IS_MOUNTED', 'verification']);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiGet([USER_KEY, USER_SECRETE, 'IS_MOUNTED', 'verification'])
      .then(res => {
        if (res[0][1] !== null) {
          const key = res[0][1]
          const secrete = res[1][1]
          const isMounted = res[2][1]
          const verification = res[3][1] || false;
          if(isMounted === 'true' && verification) {
            resolve(verification)
          } else {
            storage.dispatch(identify_user(key, secrete))
            resolve('waiting')
          }
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};