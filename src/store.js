import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import authReducer from './reducers/AuthReducer';
import flightReducer from './reducers/FlightReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['days'],
};

const rootReducer = combineReducers({
  authReducer: persistReducer(persistConfig, authReducer),
  flightReducer: persistReducer(persistConfig, flightReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
