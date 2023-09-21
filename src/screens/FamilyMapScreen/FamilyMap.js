import { View, Text, SafeAreaView, Pressable } from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { useState } from 'react';

export default FamilyMap = ({ route }) => {
  const familyModel = route.params;

  const navigation = useNavigation();

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
        <Text>{familyModel.name}</Text>
        <Text>{familyModel.latitude}</Text>
        <Text>{familyModel.longitude}</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.map}
        />
      </View>
    </SafeAreaView>
  );
};
