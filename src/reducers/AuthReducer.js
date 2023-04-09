import {
  LOGIN_USER,
  STOP_LOADER,
  LOGOUT_USER,
  SET_LOGIN,
  GET_ADDRESS,
  GET_CITIES,
  SET_PROFILE,
} from '../actions/AuthAction';

const initialState = {
  isLoggedIn: false,
  userAddresses: [],
  cities: [],
  user: null,
};

function authReducer(state = initialState, action) {
  console.log('auth_reducer');
  switch (action.type) {
    case LOGIN_USER:
      return {...state, isLoggedIn: true, user: action.payload.data};
    case LOGOUT_USER:
      console.log('in_logout_function');
      return {...state, isLoggedIn: false};
    case SET_LOGIN:
      console.log('set_user_login_reducer');
      return {...state, isLoggedIn: true, user: action.payload};
    case GET_ADDRESS:
      console.log('set_user_login_reducer');
      return {...state, userAddresses: action.payload.data};
    case GET_CITIES:
      console.log('set_user_login_reducer');
      return {...state, cities: action.payload.data};
    case SET_PROFILE:
      console.log('set_user_login_reducer');
      return {...state, user: action.payload.data};
    default:
      return state;
  }
}

export default authReducer;
