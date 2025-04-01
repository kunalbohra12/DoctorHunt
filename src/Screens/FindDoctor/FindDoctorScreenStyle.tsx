import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const style = StyleSheet.create({
    logo: {
        height: 13,
        width: 13,
        borderRadius: 50,
    },
    searchInput: {
        width: '80%',
        marginHorizontal: 12,
        color: colors.LIGHT_VIOLET,
        fontSize: 15,
        fontWeight: '400',
    },
    safeAreaBg:{
        backgroundColor:colors.DEFAULT_WHITE,
    },
});
export default style;
