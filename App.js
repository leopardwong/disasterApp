import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { AppStack } from "./src/routes/AppStack";
import { registerForPushNotificationsAsync } from "./src/utils/notificationUtils";
import { toastConfig } from "./src/utils/toastUtils";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    useEffect(() => {
        registerForPushNotificationsAsync();
    }, []);

    return (
        <NavigationContainer>
            <AppStack />
            <Toast config={toastConfig} />
        </NavigationContainer>
    );
}
