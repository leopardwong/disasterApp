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
  familyContainer: {
    backgroundColor: Colors.main_color_light,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowStyleBgColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors.white,
     padding:5,
     paddingHorizontal:10,
     borderRadius:15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  textStyleSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  textSmallGreen: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.green_accent,
    fontFamily: Fonts.bold,
  },
});

export default styles;
