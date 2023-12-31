import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbar/Navbar.js';
import NotificationItem from '../../components/NotificationItem';
import { Colors } from '../../constants/index';
import { FIRESTORE_DB } from '../../utils/firebaseConfig';

const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const { bottom } = useSafeAreaInsets();

    useEffect(() => {
        const q = query(
            collection(FIRESTORE_DB, "notifications"),
            orderBy("createdAt", "desc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const notifications = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNotifications(notifications);
        });
        return () => unsubscribe();
    }, []);

    function handleBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Navbar
                title="Notifications"
                leadingView={
                    <Pressable onPress={() => handleBack(navigation)}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            color={Colors.white}
                        />
                    </Pressable>
                }
                actionViews={
                    <Pressable onPress={() => navigation.navigate("Admin")}>
                        <Text style={styles.navbarActionText}>Admin</Text>
                    </Pressable>
                }
            />
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={notifications}
                    renderItem={({ item }) => <NotificationItem {...item} />}
                    ListFooterComponent={<View style={{ height: bottom }} />}
                />
            </View>
        </SafeAreaView>
    );

  function handleBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar
        title="Notifications"
        titleColor={Colors.white}
        leadingView={
          <Pressable onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.main_green} />
          </Pressable>
        }
        actionViews={
          <Pressable onPress={() => navigation.navigate('Admin')}>
            <Text style={styles.navbarActionText}>Admin</Text>
          </Pressable>
        }
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={notifications}
        renderItem={({ item }) => <NotificationItem {...item} />}
        ListFooterComponent={<View style={{ height: bottom }} />}
      />
    </SafeAreaView>
  );
};

export default Notifications;

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Colors.status_bar_color,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.ui_light_selected_bg,
    },
    navbarActionText: {
        color: Colors.white,
    },
});
