import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";


const Navbar = ({ title, titleColor, leadingView, actionViews }) => {

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
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      </View>
      <View style={styles.actions}>{actionViews}</View>
    </View>
  );
};

export default Navbar;
