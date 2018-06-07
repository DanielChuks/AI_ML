import { AsyncStorage } from 'react-native';
import { onSignOut } from '../../util/checkAuth'
export const initialstate = {
  fetching: false,
  fetched: false,
  user: {},
  isAuthenticated: false,
  error: null,
  forgot_password: {
    error: null,
    done: false,
    fetching: false,
    fetched: false
  },
  time_to_reauthenticate: {
    is_time_to_reauthenticate: false,
    response: "",
    reference: "",
    error: "",
    fetching: false
  },
  reauthentication: {
    response: "",
    error: "",
    fetching: false
  },
  transactionError: {
    isError: false,
    error: ""
  },
  edit_user: {
    error: null,
    updating_user_info: false,
    updated_user_info: false
  }
};

const identifyUser = (state = initialstate, action) => {
  switch (action.type) {
    case "IDENTIFYING_USER_PENDING": {
      return {
        ...state,
        fetching: true,
        user_update: false,
        isAuthenticated: false
      };
    }
    case "SIGN_UP_PENDING": {
      return {
        ...state,
        fetching: true,
        fetched: false,
        response: "",
        error: null,
        isAuthenticated: false
      };
    }
    case "SIGN_UP_REJECTED": {
      return {
        ...state,
        fetching: false,
        fetched: false,
        response: "",
        error: action.payload
      };
    }
    case "SIGN_UP_FULFILLED": {
      return{
				...state,
        fetched: true,
        fetching: false,
        token: action.payload.data.token,
        user: action.payload.data.user,
        isAuthenticated: true,
        error: null
			};
    }
    case "EDIT_USER_INFO_REJECTED": {
      return {
        ...state,
        edit_user: {
          error: action.payload.error,
          updating_user_info: false,
          updated_user_info: false
        }
      };
    }
    case "EDIT_USER_INFO_PENDING": {
      return {
        ...state,
        edit_user: {
          error: null,
          updating_user_info: true,
          updated_user_info: false
        }
      };
    }
    case "EDIT_USER_INFO_FULFILLED": {
      return {
        ...state,
        edit_user: {
          error: null,
          updating_user_info: false,
          updated_user_info: true
        },
        user: {
          ...state.user,
          email: action.payload.data.email,
          first_name: action.payload.data.first_name,
          last_name: action.payload.data.last_name,
          mobile: action.payload.data.mobile
        }
      };
    }
    case "FORGOT_PASSWORD_PENDING": {
      return {
        ...state,
        forgot_password: {
          error: null,
          done: false,
          fetching: true,
          fetched: false
        }
      };
    }
    case "TIME_TO_REAUTHENTICATE_PENDING": {
      return {
        ...state,
        time_to_reauthenticate: {
          is_time_to_reauthenticate: false,
          response: "",
          reference: "",
          error: "",
          fetching: true
        }
      };
    }
    case "TIME_TO_REAUTHENTICATE_FULFILLED": {
      return {
        ...state,
        time_to_reauthenticate: {
          is_time_to_reauthenticate: action.payload.body.status,
          response:
            action.payload.body.data.display_text ||
            action.payload.body.data.status,
          reference: action.payload.body.data.reference,
          error: "",
          fetching: false
        }
      };
    }
    case "TIME_TO_REAUTHENTICATE_REJECTED": {
      return {
        ...state,
        time_to_reauthenticate: {
          is_time_to_reauthenticate: false,
          response: "",
          reference: "",
          error: action.payload.response,
          fetching: false
        }
      };
    }
    case "FORGOT_PASSWORD_FULFILLED": {
      return {
        ...state,
        forgot_password: {
          error: null,
          done: action.payload,
          fetching: false,
          fetched: true
        }
      };
    }
    case "FORGOT_PASSWORD_REJECTED": {
      return {
        ...state,
        forgot_password: {
          error: action.payload,
          done: false,
          fetching: false,
          fetched: false
        }
      };
    }
    case "UPDATING_USER_INFORMATION_PENDING": {
      return {
        ...state,
        fetching_lastCardDigits: true,
        user_updated: false
      };
    }
    case "UPDATING_USER_INFORMATION_REJECTED": {
      return {
        ...state,
        fetching_lastCardDigits: false,
        lastCardDigits: "",
        error: action.payload,
        user_updated: false
      };
    }
    case "IDENTIFYING_USER_REJECTED": {
      return {
        ...state,
        fetching: false,
        user: {},
        isAuthenticated: false,
        lastCardDigits: "",
        error: action.payload
      };
    }
    case "IDENTIFYING_USER_FULFILLED": {
      AsyncStorage.setItem('verification', action.payload.data.user.verification)
      return {
        ...state,
        fetched: true,
        fetching: false,
        token: action.payload.data.token,
        user: action.payload.data.user,
        isAuthenticated: true,
        error: null
      };
    }
    case "UPDATING_USER_INFORMATION_FULFILLED": {
      return {
        ...state,
        fetching_lastCardDigits: false,
        fetched_lastCardDigits: true,
        lastCardDigits: action.payload.data.data.last,
        error: null,
        user_updated: true
      };
    }

    case "UPLOAD_FILES_FULFILLED": {
      const user = state.user;
      return {
        ...state,
        files_upload: action.payload.data,
        user: {
          ...user,
          verification: "inprogress"
        }
      }
    }

    /*case 'EDIT_USER_INFO_PENDING':{
			return{ ...state,
					error: null,
					updating_user_update:false,
					updated_user_update:false}
		}
		case 'EDIT_USER_INFO_FUFILLED':{
			return{ ...state,
					error:null,
					updating_user_update:false,
					updated_user_update:action.payload}
		}
		case 'EDIT_USER_INFO_REJECTED':{
			return{ ...state,
					updating_user_update:false,
					updated_user_update:false,
					error:action.payload}
    }*/
    case "SIGNIN_PAGE": {
      return {
        ...state,
        forgot_password: initialstate.forgot_password
      };
    }

    case "SIGN_OUT": {
      onSignOut();
      return { ...initialstate };
    }
    default: {
      return { ...state };
    }
  }
};

export default identifyUser;
