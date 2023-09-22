import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/HomeScreen/Home';
import Notifications from '../screens/NotificationScreen/Notifications';
import MarkSafe from '../screens/MarkSafeScreen/MarkSafe';
import MarkFamilyFriends from '../screens/MarkFamilyFriendsScreen/MarkFamilyFriends';
import FamilyMap from '../screens/FamilyMapScreen/FamilyMap';
import CurrentDisasters from '../screens/CurrentDisastersScreen/CurrentDisasters';
import DisasterTipsDetail from '../screens/DisasterTipsDetailScreen/DisasterTipsDetail';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="CurrentDisasters"
    >
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="MarkSafe" component={MarkSafe} />
      <Stack.Screen name="MarkFamilyFriends" component={MarkFamilyFriends} />
      <Stack.Screen name="FamilyMap" component={FamilyMap} />
      <Stack.Screen name="CurrentDisasters" component={CurrentDisasters} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="DisasterTipsDetail"
        component={DisasterTipsDetail}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.item.title,
        })}
      />
    </Stack.Navigator>
  );
}
