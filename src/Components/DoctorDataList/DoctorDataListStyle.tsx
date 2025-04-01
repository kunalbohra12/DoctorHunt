import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 22,
        paddingHorizontal: 20,
    },
    itemContainer: {
        flexDirection: 'column',
        backgroundColor: colors.DEFAULT_WHITE,
        borderRadius: 12,
        marginTop: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom:20,
    },
    subContainer: {
        flexDirection: 'row',
        alignItems:'center',
        gap:8,
    },
    contentContainer: {
        flexDirection: 'column',
        marginLeft: 14,
        width:'60%',
    },
    itemImage: {
        height: 87,
        width: 92,
    },
    icon: {
        height: 16,
        width: 19,
        marginRight: 20,
    },
    roundedView: {
        borderRadius: 8,
        backgroundColor: colors.LIGHT_GREEN,
        height: 10,
        width: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 17,
        alignItems:'center',
        justifyContent:'space-between',

    },
    bottomSubContainer: {
        flexDirection: 'column',
    },
    highlightTxt: {
        fontSize: 14,
        fontFamily: Fonts.RUBIC_BOLD,
        color: colors.LIGHT_GREEN,
        lineHeight: 24,
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.RUBIC_BOLD,
        color: colors.VIOLET,
        lineHeight: 24,
    },
    subTitle: {
        fontSize: 12,
        fontFamily: Fonts.RUBIC_LIGHT,
        color: colors.LIGHT_VIOLET,
        lineHeight: 24,
    },
    buttonContainer: {
        borderRadius: 8,
        height: 40,
        width: 112,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.LIGHT_GREEN,
    },
    btnTitle: {
        fontSize: 14,
        fontFamily: Fonts.RUBIC_BOLD,
        color: colors.DEFAULT_WHITE,
        lineHeight: 24,
    },
    mediumTxt: {
        fontSize: 12,
        fontFamily: Fonts.RUBIC_MEDIUM,
        color: colors.LIGHT_GREEN,
        lineHeight: 24,
    },
    regularTxt: {
        fontSize: 12,
        fontFamily: Fonts.RUBIC_LIGHT,
        color: colors.VIOLET,
        lineHeight: 24,
    },
    stackContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    subStackContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
});
export default styles;
