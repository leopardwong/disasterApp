import react, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Switch,
} from 'react-native';
import styles from './styles';
import { collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../utils/firebaseConfig';
import { TableNames } from '../../constants/index';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { useNavigation } from '@react-navigation/native';

export default Notifications = () => {
  const [input, setInput] = useState('');
  const [isSafe, setIsSafe] = useState(false);
  const toggleSwitch = () => setIsSafe((previousState) => !previousState);
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
    Figtree_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  async function saveToDatabase() {
    console.log(`Save to database ${input}`);
    const myData = {
      name: input,
      isSafe: isSafe,
    };
    try {
      const docRef = await addDoc(
        collection(FIRESTORE_DB, TableNames.notifications),
        myData
      );
      setInput('');
      setIsSafe(false);
      console.log(`input ${input}`);

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar
        title="Notifications"
        titleColor={Colors.main_green}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.main_green} />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <TextInput
          onChangeText={setInput}
          style={styles.inputStyle}
          placeholder="Hello"
          value={input}
        ></TextInput>
        <Pressable onPress={saveToDatabase}>
          <View style={styles.buttonView}>
            <Text style={styles.textStyle}>Click Me</Text>
          </View>
        </Pressable>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isSafe ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isSafe}
        />
      </View>
    </SafeAreaView>
  );
};
