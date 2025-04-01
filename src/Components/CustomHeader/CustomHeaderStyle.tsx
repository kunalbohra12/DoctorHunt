import { StyleSheet } from 'react-native';
import Fonts from '../../HelperFiles/Fonts';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 20,
        alignItems:'center',
        marginBottom:40,
        marginTop:30,
    },
    headerSubContainer: {
        flexDirection: 'row',
        alignItems:'center',
        gap:20,
    },
    headerIcon: {
        height: 30,
        width: 30,
    },
    headerTitle: {
        fontWeight: '700',
        fontFamily:Fonts.RUBIC_BOLD,
        fontSize: 18,
        lineHeight: 21,
        color:colors.LIGHT_BLACK,
    },
    rightIcon:{
        height:18,
        width:18,
    },
});
export default styles;
