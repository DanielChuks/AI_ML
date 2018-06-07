import { AsyncStorage } from 'react-native';

import { initialstate } from './indentifyUserReducer';

const signUp=(state=initialstate,action)=>{
	switch(action.type){
		case"SIGN_UP_PENDING":{
			return{
				...state,
				fetching:true,
				fetched:false,
				response:"",
				error:null
			}
		}
		case"SIGN_UP_REJECTED":{
			return{
				...state,
				fetching:false,
				fetched:false,
				response:"",
				error:action.payload
			}
		}
		case"SIGN_UP_FULFILLED":{
      AsyncStorage.setItem('verification', action.payload.data.user.verification)
			return{
				...state,
        fetched: true,
        fetching: false,
        token: action.payload.data.token,
        user: action.payload.data.user,
        isAuthenticated: true,
        error: null
			}
		}
		default:
		return state;
	}
}

export default signUp;