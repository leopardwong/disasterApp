import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

const SEVERITY_COLORS = {
    low: "#FFC107",
    medium: "#FF9800",
    high: "#F44336",
};

const NotificationItem = ({ title, body, location, createdAt, severity }) => {
    const scales = [useSharedValue(1), useSharedValue(1), useSharedValue(1)];
    const opacities = [
        useSharedValue(0.5),
        useSharedValue(0.5),
        useSharedValue(0.5),
    ];

    const getAnimatedStyle = (index) => {
        scales[index].value = withDelay(
            index * 500,
            withRepeat(withTiming(1.2, { duration: 1500 }), -1)
        );

        opacities[index].value = withDelay(
            index * 500,
            withRepeat(withTiming(0, { duration: 1500 }), -1)
        );
        return useAnimatedStyle(() => ({
            opacity: opacities[index].value,
            transform: [{ scale: scales[index].value }],
        }));
    };

    const isWithinOneDay = (createdAt) => {
        const ONE_DAY_IN_MS = 86400000;
        const now = new Date();
        const createdAtDate = new Date(createdAt);
        return now - createdAtDate < ONE_DAY_IN_MS;
    };

    const rippleLayer = (index) => (
        <Animated.View
            key={index}
            style={[
                styles.rippleLayer,
                { backgroundColor: SEVERITY_COLORS[severity ?? "low"] },
                getAnimatedStyle(index),
            ]}
        />
    );

    return (
        <View style={styles.notificationItem}>
            {isWithinOneDay(createdAt) &&
                Array(2)
                    .fill(0)
                    .map((_, index) => rippleLayer(index))}
            <View style={styles.notificationTitleContainer}>
                <Text style={styles.notificationTitle}>{title}</Text>
                {isWithinOneDay(createdAt) && (
                    <Text style={styles.notificationWarning}>Now</Text>
                )}
            </View>
            <Text style={styles.notificationBody}>{body}</Text>
            {location && (
                <View style={styles.locationContainer}>
                    <Image
                        source={require("../assets/location.png")}
                        style={styles.locationIcon}
                    />
                    <Text style={styles.notificationLocation}>{location}</Text>
                </View>
            )}
        </View>
    );
};

export default NotificationItem;

const styles = StyleSheet.create({
    notificationItem: {
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    rippleLayer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 8,
        // backgroundColor: "#FFC107",

        // opacity: 0.5,
        // transform: [{ scale: 1 }],
    },
    notificationTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    notificationWarning: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFC107",
    },
    notificationBody: {
        fontSize: 14,
        color: "#666",
        marginTop: 8,
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    locationIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    notificationLocation: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
});
