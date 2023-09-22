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
    height: '30%',
  },
  myList: {
    width: '100%',
    height: '100%',
  },
  familyContainer: {
    backgroundColor: Colors.main_color_light,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: Fonts.bold,
    textDecorationLine: 'underline',
  },
  textSmallStyle: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.light,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rowStyleText: {
    flexDirection: 'row',
    marginRight: 20,
  },
  textSmallStyleBold: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.bold,
    marginRight: 3,
  },
});

export default styles;
