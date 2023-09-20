import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/HomeScreen/Home';
import Notifications from '../screens/NotificationScreen/Notifications';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
