import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect, useSelector, useDispatch} from 'react-redux';

export const SET_LOGIN = 'SET_LOGIN';



export const setUserLogin = () => {
  console.log('Set_user_logoinisn');
  try {
    return async (dispatch) => {
      const d = await AsyncStorage.getItem('user');
      const data = JSON.parse(d);
      console.log('set_user_login', data);
      dispatch({
        type: SET_LOGIN,
        payload: data,
      });
    };
  } catch (error) {
    console.log('errorrororor', error);
  }
};






