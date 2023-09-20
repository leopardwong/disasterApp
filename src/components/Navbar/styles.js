import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants/index'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: Colors.main_color,
    paddingHorizontal: 16,
  },
  leading: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: Fonts.regular
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;
