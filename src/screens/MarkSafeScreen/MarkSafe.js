import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../utils/firebaseConfig';
import { TableNames } from '../../constants/index';
import * as Location from 'expo-location';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { useEffect, useState } from 'react';

export default MarkSafe = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [isSafe, setIsSafe] = useState(false);
  const toggleSwitch = () => setIsSafe((previousState) => !previousState);

  // Location
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [haveUserLocation, setHaveUserLocation] = useState(false);

  useEffect(() => {
    (async () => {
      getUserLocation();
    })();
  }, []);

  async function getUserLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied!\nPlease turn on from settings!');
      setErrorMsg('Permission to access location was denied');
      return;
    } else {
      console.log(`status: ${status}`);
    }

    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    console.log(`${location.coords.latitude},${location.coords.longitude}`);
    setLocation(location.coords);
    setHaveUserLocation(true);
  }
  //

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
    Figtree_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  async function markmyself() {
    if (input == '') {
      Alert.alert('Please enter your name');
      return;
    }
    if (
      latitude == null ||
      latitude == 0 ||
      longitude == null ||
      longitude == 0
    ) {
      Alert.alert('Pleas enable location');
      return;
    }
    const myData = {
      name: input,
      isSafe: isSafe,
      latitude: latitude,
      longitude: longitude,
    };
    try {
      const docRef = await addDoc(
        collection(FIRESTORE_DB, TableNames.markSafe),
        myData
      );
      setInput('');

      Alert.alert(
        `Now your family can see that you are ${isSafe ? 'Safe' : 'Not Safe'}`
      );

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  function handleBack() {
    navigation.goBack();
  }
  function viewAll() {
    navigation.navigate('MarkFamilyFriends');
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar
        title="Mark Safe"
        titleColor={Colors.white}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.white} />
          </Pressable>
        }
        actionViews={
          <Pressable onPress={viewAll}>
            <Text style={styles.navbarTextStyle}>View All</Text>
          </Pressable>
        }
      />
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={markmyself}>
            <View style={styles.circles}>
              <View style={styles.outerCircleMain}>
                <View style={styles.innerCircle} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={setInput}
              style={styles.inputStyle}
              placeholder="Enter your name..."
              value={input}
            />
            <View>
              <Switch
                trackColor={{ false: 'red', true: Colors.main_color_light }}
                thumbColor={isSafe ? Colors.text_color : Colors.text_color}
                ios_backgroundColor={Colors.ui_grey_05}
                onValueChange={toggleSwitch}
                value={isSafe}
              />
              <Text style={styles.safeNotSafeText}>
                {isSafe ? 'Safe' : 'Not Safe'}
              </Text>
            </View>
          </View>
          <View style={styles.latLongWithText}>
            <Text style={styles.safeNotSafeText}>
              Location: {latitude ?? 0},{longitude ?? 0}
            </Text>
            {!haveUserLocation ? (
              <TouchableOpacity onPress={getUserLocation}>
                <FontAwesomeIcon icon={faRefresh} color={Colors.main_color} />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
