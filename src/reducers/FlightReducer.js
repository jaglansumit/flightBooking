import {SET_DATES, GET_FLIGHTS, SET_FLIGHT} from '../actions/FlightAction';

const initialState = {
  days: [],
  flights: [],
  selectedFlight: null,
};

function flightReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATES:
      return {...state, days: action.payload};
    case GET_FLIGHTS:
      return {...state, flights: action.payload};
    case SET_FLIGHT:
      return {...state, selectedFlight: action.payload};
    default:
      return state;
  }
}

export default flightReducer;
