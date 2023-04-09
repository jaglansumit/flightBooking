import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './auth-stack';
import RootRoutes from './dashboard-stack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <AuthStack /> */}
      <RootRoutes />
    </NavigationContainer>
  );
};

export default AppContainer;