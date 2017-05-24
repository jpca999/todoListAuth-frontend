import axios from 'axios';
import {SIGNIN_URL, SIGNUP_URL} from '../api';

import { addAlert } from './alertsActions';

exports.loginUser = (email, password) => {
  return function (dispatch) {
      return axios.post(SIGNIN_URL, {email, password}).then((response) => {
          var {user_id, token} = response.data;
          dispatch(addAlert(token));
          dispatch(authIser(user_id));
      }).catch((error) => {
          dispatch(addAlert("Could not log in."));
      })
  }
}

exports.signupUser = (email, password) => {
  return function (dispatch) {
    // this takes dispatch as an argument, so that it can dispatch other functions.
      return axios.post(SINGUP_URL, {email, password}).then((response) => {
          var {user_id, token} = response.data;
          dispatch(addAlert(token));
          dispatch(authIser(user_id));
      }).catch((error) => {
          dispatch(addAlert("Could not SignUp."));
      })
  }
}


exports.authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id: user_id
  }
}

exports.unauthUser = {
    type: 'UNAUTH_USER'
}



// export.unauthUser = (user_id){
//   return {
//     type: 'UNAUTH_USER'
//   }
// }  5:0
