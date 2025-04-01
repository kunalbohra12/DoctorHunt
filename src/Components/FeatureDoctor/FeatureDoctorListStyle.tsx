import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({

    headerView: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.LIGHT_BLACK,
    },
    headerSubTitle: {
        fontSize: 12,
        fontWeight: '300',
        color: colors.LIGHT_VIOLET,
    },
    headerIcon: {
        height: 6,
        width: 3,
    },
    headerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginRight: 15,
    },
    container: {
        paddingBottom: 100,
    },
    itemContainer: {
        flexDirection: 'column',
        height: 150,
        width: 96,
        backgroundColor: colors.DEFAULT_WHITE,
        borderRadius: 12,
        marginTop: 12,
        marginHorizontal: 10,
        elevation: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    itemHeaderContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    detailsContainer: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 8,
        width: 10,
    },
    title: {
        fontSize: 10,
        fontWeight: '500',
        color: colors.DEFAULT_BLACK,
    },
    userIcon: {
        height: 54,
        width: 54,
        marginTop: 10,
    },
    mediumTxt: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14,
        marginTop: 10,
        color: colors.LIGHT_BLACK,
    },
    regularTxt: {
        fontSize: 9,
        fontWeight: '500',
        lineHeight: 10,
        marginTop: 5,
        color: colors.LIGHT_VIOLET,
    },
    highlightTxt: {
        fontSize: 9,
        fontWeight: '500',
        lineHeight: 10,
        marginTop: 10,
        color: colors.LIGHT_GREEN,
    },
});
export default styles;
