import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ValidateOtp, SignUp , NewScreen} from '../screens/auth';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      cardOverlayEnabled={true}
      cardShadowEnabled={true}
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="AnimationOTP" component={AnimationOTP} /> */}
      {/* <Stack.Screen name='NewScreen' component={NewScreen} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ValidateOtp" component={ValidateOtp} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
