import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../constants/index';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.status_bar_color,
    flex: 1,
  },
  container: {
    width: windowWidth,
    backgroundColor: Colors.ui_light_selected_bg,
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
