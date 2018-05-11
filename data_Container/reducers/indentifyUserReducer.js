const initialstate = {
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
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload.data,
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
    case "CLEAR_CARD_ERROR": {
      return {
        ...state,
        reauthentication: {
          response: "",
          error: "",
          fetching: false
        },
        time_to_reauthenticate: {
          is_time_to_reauthenticate: false,
          response: "",
          reference: "",
          error: "",
          fetching: false
        }
      };
    }
    case "REAUTHENTICATE_CARD_PENDING": {
      return {
        ...state,
        reauthentication: {
          response: "",
          error: "",
          fetching: true
        }
      };
    }
    case "REAUTHENTICATE_CARD_FULFILLED": {
      return {
        ...state,
        reauthentication: {
          response: action.payload.body,
          error: "",
          fetching: false
        }
      };
    }
    case "REAUTHENTICATE_CARD_REJECTED": {
      return {
        ...state,
        reauthentication: {
          response: "",
          error: action.payload.response.body,
          fetching: false
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
    case "TRANSACTION_ERROR": {
      return {
        ...state,
        transactionError: {
          isError: !action.payload.isError,
          error: action.payload.error
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
    case "ORDER_STATUS_PENDING": {
      return {
        ...state,
        orderstatus_fetching: true,
        orderstatus_fetched: false,
        orderstatus: []
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
    case "ORDER_STATUS_FULFILLED": {
      return {
        ...state,
        orderstatus_fetching: false,
        orderstatus_fetched: true,
        orderstatus: action.payload
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
    case "ORDER_STATUS_REJECTED": {
      return {
        ...state,
        orderstatus_fetching: false,
        orderstatus_fetched: false,
        orderstatus: action.payload
      };
    }
    case "ADD_NEW_TRANSACTION": {
      return {
        ...state,
        transaction: action.payload
      };
    }
    case "CLEAR_TRANSACTION": {
      return {
        ...state,
        transaction: action.payload
      };
    }
    case "ADD_CARD_PENDING": {
      return {
        ...state,
        fetching_addcard: true
      };
    }
    case "FETCH_ORDER_HISTORY_PENDING": {
      return {
        ...state,
        fetched_orderhistory: false,
        fetching_orderhistory: true,
        orderhistory: []
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
    case "FETCH_ORDER_HISTORY_REJECTED": {
      return {
        ...state,
        fetching_orderhistory: false,
        fetched_orderhistory: false,
        orderhistory: [],
        error: action.payload
      };
    }
    case "ADD_CARD_REJECTED": {
      return {
        ...state,
        fetching_addcard: false,
        fetched_addcard: false,
        error: action.payload
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
    case "FETCH_ORDER_HISTORY_FULFILLED": {
      return {
        ...state,
        fetched_orderhistory: true,
        fetching_orderhistory: false,
        orderhistory: action.payload,
        error: null
      };
    }
    case "IDENTIFYING_USER_FULFILLED": {
      return {
        ...state,
        lastCardDigits: "",
        fetched: true,
        fetching: false,
        user: action.payload.data,
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
    case "ADD_CARD_FULFILLED": {
      return {
        ...state,
        fetching_addcard: false,
        fetched_addcard: true,
        lastCardDigits: action.payload.data.data.last,
        error: null
      };
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

    case "SIGN_OUT": {
      return { ...initialstate };
    }
    default: {
      return { ...state };
    }
  }
};

export default identifyUser;
