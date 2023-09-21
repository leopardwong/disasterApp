import { View, Text, SafeAreaView, Pressable } from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import TitleSection from '../../components/TitleSection';
import DisasterTipsList from '../../components/DisasterTipsList';

export default Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Navbar
        title="Home"
        titleColor={Colors.main_green}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.main_green} />
          </Pressable>
        }
      /> */}
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.textStyle}>View Notifications</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MarkSafe')}>
          <Text style={styles.textStyle}>Goto MarkSafe</Text>
        </Pressable>
        <TitleSection />
        <DisasterTipsList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
