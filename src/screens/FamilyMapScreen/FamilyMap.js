import { View, Text, SafeAreaView, Pressable ,Image} from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { useEffect, useState } from 'react';

export default FamilyMap = ({ route }) => {
  const familyModel = route.params;
  // const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      // setLocation(coords);
    })();
  }, []);

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
    Figtree_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar
        title="Friends/Family Location"
        titleColor={Colors.white}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.white} />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={{
            latitude: familyModel.latitude,
            longitude: familyModel.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: familyModel.latitude,
              longitude: familyModel.longitude,
            }}
            title={`${familyModel.name}'s Location`}
            description={`This is where ${familyModel.name}`}
          >
            <Image
              source={require('../../../src/assets/my_marker.gif')}
              style={{ width: 40, height: 40,}}
            />
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};
