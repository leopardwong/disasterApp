import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

export default CurrentDisasters = ({ route }) => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=1&limit=20'
    )
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error));
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
        title="Current Disasters"
        titleColor={Colors.white}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.white} />
          </Pressable>
        }
      />

      <ScrollView>
        <View style={styles.myList}>
          {data.map((item, index) => (
            <SingleDisasterItem key={index} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const MyMap = (item) => {
//   const navigation = useNavigation();
//   const model = item.data;

//   return (
//     <MapView
//       provider={PROVIDER_GOOGLE}
//       showsUserLocation={true}
//       style={styles.map}
//       minZoomLevel={1}
//       initialRegion={{
//         latitude: 6.795218101812615,
//         longitude: 79.9008869173333,
//         latitudeDelta: 6.795218101812615,
//         longitudeDelta: 79.9008869173333,
//       }}
//     >
//       <Marker
//         coordinate={{
//           latitude: familyModel.latitude,
//           longitude: familyModel.longitude,
//         }}
//         title={`${familyModel.name}'s Location`}
//         description={`This is where ${familyModel.name}`}
//       >
//         <Image
//           source={require('../../../src/assets/my_marker.gif')}
//           style={{ width: 40, height: 40 }}
//         />
//       </Marker>
//     </MapView>
//   );
// };
const SingleDisasterItem = (item) => {
  const navigation = useNavigation();
  const model = item.item;
  console.log(model);
  const name = model.fields.name;
  const status = model.fields.status;
  const type = model.fields.type[0].name;
  const country = model.fields.country[0].name;
  const url = model.fields.url;

  async function gotoPage() {
    // navigation.navigate('DisasterDetail', model);

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  return (
    <Pressable onPress={gotoPage}>
      <View style={styles.familyContainer}>
        <View>
          <Text style={styles.textStyle}>{name}</Text>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.rowStyleText}>
            <Text style={styles.textSmallStyleBold}>Status:</Text>
            <Text style={styles.textSmallStyle}>{status}</Text>
          </View>
          <View style={styles.rowStyleText}>
            <Text style={styles.textSmallStyleBold}>Disaster Type:</Text>
            <Text style={styles.textSmallStyle}>{type}</Text>
          </View>
        </View>
        <View style={styles.rowStyleText}>
          <Text style={styles.textSmallStyleBold}>Country:</Text>
          <Text style={styles.textSmallStyle}>{country}</Text>
        </View>
      </View>
    </Pressable>
  );
};
