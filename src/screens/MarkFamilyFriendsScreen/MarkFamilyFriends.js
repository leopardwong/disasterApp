import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../utils/firebaseConfig';
import { TableNames } from '../../constants/index';
import 'firebase/firestore';

import firebase from 'firebase/app';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import TitleSection from '../../components/TitleSection';
import DisasterTipsList from '../../components/DisasterTipsList';
import { useEffect, useState } from 'react';

export default MarkFamilyFriends = () => {
  const navigation = useNavigation();
  const [familylist, setFamilyList] = useState([]);
  var myTempList = [];
  useEffect(() => {
    getAllDataFromFirestore();
  }, []);

  async function getAllDataFromFirestore() {
    setFamilyList([]);
    const querySnapshot = await getDocs(
      collection(FIRESTORE_DB, TableNames.markSafe)
    );
    myTempList = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const name = doc.get('name');
      const isSafe = doc.get('isSafe');
      const latitude = doc.get('latitude');
      const longitude = doc.get('longitude');
      const myModel = {
        id: id,
        name: name,
        isSafe: isSafe,
        latitude: latitude,
        longitude: longitude,
      };

      setFamilyList((prevList) => [...prevList, myModel]);
    });
  }

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
        title="Family and Friends"
        titleColor={Colors.white}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.white} />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <FlatList
          data={familylist}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => <SingleFamilyItem item={item} />}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: 'transparent', width: 10 }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const SingleFamilyItem = (item) => {
  const navigation = useNavigation();
  const model = item.item;

  function viewLocation() {
    navigation.navigate('FamilyMap', model);
  }

  return (
    <Pressable onPress={viewLocation}>
      <View style={styles.familyContainer}>
        <View style={styles.rowStyle}>
          <View>
            <Text style={styles.textStyle}>{model.name}</Text>
            {model.isSafe ? <MarkSafe /> : <MarkUnsafe />}
          </View>
          <View style={styles.rowStyle}>
            <Text style={[styles.textStyleSmall, { marginRight: 8 }]}>
              View Location
            </Text>
            <FontAwesomeIcon icon={faArrowRight} color="white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const MarkSafe = () => {
  return (
    <View style={[styles.rowStyleBgColor, { marginTop: 10 }]}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        size={12}
        color={Colors.green_accent}
      />
      <Text style={styles.textSmallGreen}>MARKED SAFE!</Text>
    </View>
  );
};
const MarkUnsafe = () => {
  return (
    <View style={styles.rowStyleBgColor}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        size={12}
        color={Colors.red_accent}
      />
      <Text style={styles.textSmallRed}>MARKED UNSAFE!</Text>
    </View>
  );
};
