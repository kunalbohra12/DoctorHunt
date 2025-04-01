import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({

    topContainer: {
        height: 156,
        width: '100%',
        backgroundColor: colors.LIGHT_GREEN,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 19,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    safeAreaBg:{
        backgroundColor:colors.LIGHT_GREEN,
    },
    topSubContainer:{
        flexDirection:'column',
        gap:6,
    },
    imgContainer:{
        height:54,
        width:54,
    },
    title: {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 23,
        color: colors.BLUR_WHITE,
        fontFamily:'RUBIC_BLACK',
    },
    subTitle: {
        fontSize: 25,
        fontWeight: '700',
        lineHeight: 29,
        color: colors.DEFAULT_WHITE,
    },
    logo: {
        height: 13,
        width: 13,
        borderRadius: 50,
    },
    searchBar: {
        flexDirection: 'row',
        height: 54,
        backgroundColor: colors.DEFAULT_WHITE,
        marginTop: -25,
        borderRadius: 6,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    searchInput: {
        width: '80%',
        marginHorizontal: 12,
        color: colors.LIGHT_VIOLET,
        fontSize: 15,
        fontWeight: '400',
    },
    listContainer: {
        
    },
    userImg:{
        height:54,
        width:54,
    },
});
export default styles;
