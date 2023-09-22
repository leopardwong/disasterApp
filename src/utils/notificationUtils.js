import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export const registerForPushNotificationsAsync = async () => {
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
        }
    } else {
        console.log("Must use physical device for Push Notifications");
    }
};

export const schedulePushNotification = async (title, content) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body: content,
        },
        trigger: { seconds: 2 },
    });
};
