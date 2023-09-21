import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/index';

import {
    useFonts,
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_700Bold,
} from '@expo-google-fonts/figtree';

export default TitleSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello!
            </Text>
            <Text style={styles.subTitle}>
                What can I help you?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        fontSize: 30
    },
    subTitle: {
        fontSize: 20
    },
});