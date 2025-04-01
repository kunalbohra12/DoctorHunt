
import { Platform, StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.GREYISH,

    },
    safeAreaBG: {
        flex: 1,
        backgroundColor: colors.GREYISH,
    },
    headerContainer: {
        height: 40,
        flexDirection: 'row',
        gap: 20,
        // paddingLeft: 20,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 8 : 30,
    },
    headerTitle: {
        fontSize: 22,
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.RUBIC_BOLD,
        lineHeight: 36,
        marginLeft: 19,
    },
    subContainer: {
        marginTop: 50,
    },
    navigateBtnContainer: {
        borderRadius: 8,
        backgroundColor: colors.DEFAULT_WHITE,
        height: 24,
        width: 24,
    },
    inputTitle: {
        fontSize: 18,
        fontFamily: Fonts.RUBIC_REGULAR,
        color: colors.DEFAULT_WHITE,
    },
    input: {
        fontSize: 14,
        fontFamily: Fonts.RUBIC_MEDIUM,
        color: colors.DEFAULT_WHITE,
        marginTop:40,
        marginBottom:10,
    },
    icon: {
        height: 30,
        width: 30,
    },
    horizontalLine: {
        height: 2,
        width: '100%',
        backgroundColor: colors.DEFAULT_WHITE,
    },
});
export default styles;
