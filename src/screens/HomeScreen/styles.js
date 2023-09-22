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
  iconStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  textStyle: {
    textAlign: 'right',
    color: Colors.text_color,
    textDecorationLine: 'underline',
    margin: 15,
  },
  cardItem: {
    backgroundColor: Colors.main_color_light,
    height: 100,
    elevation: 3,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTextstyle: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 30,
  },
  spacer:{
    height:10,
  },
});

export default styles;
