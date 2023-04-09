import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect, useSelector, useDispatch} from 'react-redux';
import {instance, ApiInstance} from '../api/CallInstance';
import Moment from 'moment';
import axios from 'axios';

export const SET_DATES = 'SET_DATES';
export const GET_FLIGHTS = 'GET_FLIGHTS';
export const SET_FLIGHT = 'SET_FLIGHT';

export const getNextDate = () => {
  try {
    return async dispatch => {
      let currentDate = new Moment();
      let date = currentDate;
      let dateComp = [];
      const maxDate = 10;
      for (
        nextIncrementIndex = 0;
        nextIncrementIndex <= maxDate;
        nextIncrementIndex++
      ) {
        if (dateComp.length > 0) {
          date = date.add(1, 'days');
        }
        const week = date.format('dddd');
        const month = date.format('MMM');
        const day = date.format('DD');
        const day_name = date.format('Do MMM');
        const payload = {
          week: week,
          month: month,
          day: day,
          day_name: day_name,
          date: date.format('DD-MM-yyyy'),
        };
        dateComp.push(payload);
      }

      dispatch({
        type: SET_DATES,
        payload: dateComp,
      });
    };
  } catch (error) {
    console.log('errorrororor', error);
  }
};

export const getFlights = () => {
  try {
    return async dispatch => {
      const res = await ApiInstance.get('4829d4ab0e96bfab50e7');
      if (res) {
        var ress = JSON.stringify(res.data);
        const parsed = JSON.parse(ress);
        const data = parsed.data.result;
        let flightsComp = [];

        console.log('market_data_is_here', parsed.data.result);
        for (var i = 0; i < data.length; i++) {
          const payload = {
            fare: data[i].fare,
            airline: data[i].displayData.airlines[0].airlineName,
            airlineCode: data[i].displayData.airlines[0].airlineCode,
            destinationCode:
              data[i].displayData.destination.airport.airportCode,
            destinationName: data[i].displayData.destination.airport.cityName,
            destinationTime: data[i].displayData.destination.arrTime,
            sourceCode: data[i].displayData.source.airport.airportCode,
            sourceName: data[i].displayData.source.airport.cityName,
            sourceTime: data[i].displayData.source.depTime,
            totalDuration: data[i].displayData.totalDuration,
          };
          flightsComp.push(payload);
        }
        dispatch({
          type: GET_FLIGHTS,
          payload: flightsComp,
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    console.log('errorrororor', error);
  }
};

export const setFlight = item => {
  try {
    return async dispatch => {
      dispatch({
        type: SET_FLIGHT,
        payload: item,
      });
    };
  } catch (error) {
    console.log('errorrororor', error);
  }
};

export const bookFlight = async () => {
  try {
    const res = await ApiInstance.get('d0fe9a5513208c354c52');
    if (res) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
