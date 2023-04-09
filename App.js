import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import AppContainer from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

const App = () => {

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" hidden={false} />
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
