import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AdminPanel from "../screens/AdminPanel/AdminPanel";
import DisasterTipsDetail from "../screens/DisasterTipsDetailScreen/DisasterTipsDetail";
import Home from "../screens/HomeScreen/Home";
import Notifications from "../screens/NotificationScreen/Notifications";

const Stack = createNativeStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Admin" component={AdminPanel} />
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
