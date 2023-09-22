import { View, Text, SafeAreaView, Pressable, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Colors } from '../constants/index';
import { Title } from 'react-native-paper';
import disasterTipsListData from '../modal/disasterTips.json';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'

const borderRadius = 10;

const Item = ({ onPress, itemData }) => {
    return (
        <Pressable onPress={onPress}>
            <ImageBackground source={{ uri: itemData.imageUrl }} resizeMode="cover" style={styles.item} imageStyle={{ borderRadius: borderRadius }}>
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={{ borderRadius: borderRadius }}>
                    <View style={styles.gradientContainer}>
                        <Text style={styles.itemText}>{itemData.title}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    );
};

export default DisasterTipsList = ({ navigation }) => {
    const [disasterTips, setDisasterTips] = useState(disasterTipsListData);
    return (
        <View>
            <View style={styles.container}>
                <Title style={styles.title}>Tips</Title>
            </View>
            <View>
                <FlatList
                    ListHeaderComponent={() => <View style={styles.itemFooterHeader}></View>}
                    ListFooterComponent={() => <View style={styles.itemFooterHeader}></View>}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                    horizontal={true}
                    data={disasterTips}
                    renderItem={({ item }) => <Item itemData={item} title={item.title} imageUrl={item.imageUrl} onPress={() => navigation.navigate('DisasterTipsDetail', { item: item })} />}
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', width: 10 }} />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        paddingBottom: 5
    },
    gradientContainer: {
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        display: 'flex',
        height: 200,
        width: 120,
        justifyContent: 'flex-end',
        borderRadius: borderRadius,
        backgroundColor: Colors.grey
    },
    itemText: {
        padding: 10,
        color: 'white',
    },
    itemSeparator: {
        backgroundColor: 'transparent',
        width: 10
    },
    itemFooterHeader: {
        backgroundColor: 'transparent',
        width: 20
    },
});