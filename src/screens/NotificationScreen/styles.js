import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../constants/index';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.status_bar_color,
  },
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: Colors.red_accent,
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
  },
  inputStyle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 20,

    marginTop: 10,
  },
  buttonView: {
    height: 45,
    backgroundColor: Colors.main_color_light,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    borderRadius: 15,
  },
});

export default styles;
