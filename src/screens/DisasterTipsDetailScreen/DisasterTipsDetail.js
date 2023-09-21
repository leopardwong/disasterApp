import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default DisasterTipsDetail = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 20 }}>
                <Image source={{ uri: item.imageUrl }} style={{ height: 150, borderRadius: 5, marginBottom: 10 }}></Image>
                <Text>{item.tips}</Text>
            </View>
        </SafeAreaView>
    )
}