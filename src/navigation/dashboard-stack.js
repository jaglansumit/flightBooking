import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Home, FlightsList, FlightDetails, BoardingPass} from '../screens/home';

const Stack = createStackNavigator();

const RootRoutes = () => {
  return (
    <Stack.Navigator
      cardOverlayEnabled={true}
      cardShadowEnabled={true}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="FlightsList" component={FlightsList} />
      <Stack.Screen name="FlightDetails" component={FlightDetails} />
      <Stack.Screen name="BoardingPass" component={BoardingPass} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default RootRoutes;
