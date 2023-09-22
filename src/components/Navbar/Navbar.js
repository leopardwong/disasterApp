import {
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_700Bold,
    useFonts,
} from "@expo-google-fonts/figtree";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Navbar = ({ title, titleColor = "#fff", leadingView, actionViews }) => {
    let [fontsLoaded] = useFonts({
        Figtree_700Bold,
        Figtree_500Medium,
        Figtree_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.leading}>{leadingView}</View>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, { color: titleColor }]}>
                    {title}
                </Text>
            </View>
            <View style={styles.actions}>{actionViews}</View>
        </View>
    );
};

export default Navbar;
