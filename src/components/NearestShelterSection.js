import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

export default NearestShelterSection = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>
                Nearest Shelter
            </Title>
            <View style={styles.mapConatainer}>
                <MapView
                    initialRegion={{
                        latitude: 43.708053715841835,
                        longitude: -79.39395912896487,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={styles.map}
                    minZoomLevel={10}>
                    <Marker
                        title={'Nearest Shelter'}
                        coordinate={{
                            latitude: 43.70641432397643,
                            longitude: -79.40196415410809
                        }} />
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    mapConatainer: {
        overflow: 'hidden',
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold'
    },
    map: {
        width: '100%',
        height: 200,
    },
});