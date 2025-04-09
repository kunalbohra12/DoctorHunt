import { StyleSheet } from 'react-native';
import colors from './Colors';
import Fonts from './Fonts';
const GlobalStyles = StyleSheet.create({
    gradientBG: {
        flex: 1,
    },
    alignContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginTop:50,
    },
    columnContainer: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
    },
    rowContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    containerPadding: {
        marginHorizontal: 48,
    },

    btnStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnTxtStyle: {
        fontSize: 18,
        fontFamily: Fonts.RUBIC_MEDIUM,
        color: colors.VIOLET,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 20,
    },
    searchBar: {
        flexDirection: 'row',
        height: 54,
        backgroundColor: colors.DEFAULT_WHITE,
        marginTop: -25,
        borderRadius: 12,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    containerSpacing: {
        paddingHorizontal: 20,
    },
    bottomPadding: {
        paddingBottom: 20,
    },
    safeAreaBg: {
        backgroundColor:colors.LIGHT_GREEN,
    },
    defaultBg:{
        backgroundColor:colors.DEFAULT_WHITE,
    },
    regualarTxt:{
        fontFamily: Fonts.RUBIC_REGULAR,
        fontSize: 14,
        color: colors.VIOLET,
    }
});
export default GlobalStyles;
