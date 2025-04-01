import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
  videoContainer: {
    height: 168,
    width: 116,
    resizeMode: 'stretch',
    marginHorizontal:14,
  },
  blurredView: {
    opacity: 0.3,
    width: 116,
    height: 168,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colors.LIGHT_BLACK,
  },
  headerView: {
    position: 'absolute',
    top:0,
    right:0,
  },
  roundedContainer: {
    borderRadius: 50,
    height: 20,
    width: 20,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  logo: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
  },
});
export default styles;
