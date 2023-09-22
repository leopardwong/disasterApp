import { View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import Navbar from '../../components/Navbar/Navbar.js';
import { Colors } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import TitleSection from '../../components/TitleSection';
import DisasterTipsList from '../../components/DisasterTipsList';
import EarthquakeSection from '../../components/EarthquakeSection';
import NearestShelterSection from '../../components/NearestShelterSection';
import { faFonticonsFi } from '@fortawesome/free-brands-svg-icons';

export default Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ScrollView>
          <Pressable
            style={styles.iconStyle}
            onPress={() => navigation.navigate('Notifications')}
          >
            <FontAwesomeIcon icon={faBell} color={Colors.main_color} />
          </Pressable>
          <TitleSection />
          <NearestShelterSection />
          <DisasterTipsList navigation={navigation} />
          <View style={[styles.spacer, {height:20}]} />
          <CardItem route="MarkSafe" name="Mark Safe" />
          <View style={styles.spacer} />
          <CardItem route="CurrentDisasters" name="Current Disaster" />
          <EarthquakeSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const CardItem = ({route, name})=>{
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(route)}>
      <View style={styles.cardItem}>
        <Text style={styles.cardTextstyle}>{name}</Text>
      </View>
    </Pressable>
  );
}
