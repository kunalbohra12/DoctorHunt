import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
    paddingHorizontal:20,
  },
  title: {
    fontSize: 22,
    color: colors.DEFAULT_BLACK,
    fontFamily: Fonts.RUBIC_MEDIUM,
    lineHeight: 36,
  },
  subTitle: {
    fontSize: 14,
    color: colors.LIGHT_GREEN,
    fontFamily: Fonts.RUBIC_LIGHT,
    lineHeight: 23,
    marginTop: 7,
  },
  gridItemContainer: {
    flexDirection: 'row',
    height: 52,
    width: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 37,
    width: 33,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.DEFAULT_BLACK,
    fontFamily: Fonts.RUBIC_BLACK,
    lineHeight: 36,
  },

});
export default styles;
