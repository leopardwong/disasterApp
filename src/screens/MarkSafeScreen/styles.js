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

    justifyContent: 'center',
  },
  circles: {
    height: 200,
    width: 200,
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
  },
  outerCircleMain: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    height: 160,
    width: 160,
    borderRadius: 80,
    padding: 20,
    alignSelf: 'center',
  },

  innerCircle: {
    backgroundColor: 'red',
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'right',
    color: Colors.text_color,
    textDecorationLine: 'underline',
    margin: 15,
  },
  inputStyle: {
    backgroundColor: Colors.ui_grey_05,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignSelf: 'center',
    borderColor: 'rgba(255, 0, 0, 0.2)',
    borderWidth: 1.5,
    borderRadius: 12,
    height: 45,
    width: windowWidth / 2,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  safeNotSafeText: {
    fontFamily: Fonts.bold,
    color: Colors.main_color,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    marginRight: 10,
  },
  latLongWithText: {
    flexDirection: 'row',
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
  },
});

export default styles;
