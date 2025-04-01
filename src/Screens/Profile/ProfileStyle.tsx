
import { Platform, StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    topContainer:{
        // height:357,
        borderBottomLeftRadius:24,
        borderBottomRightRadius:24,
        backgroundColor:colors.LIGHT_GREEN,
    },
    subContainer: {
        flexDirection: 'column',
    },

    headerContainer: {
        height: 40,
        flexDirection: 'row',
        gap: 20,
        paddingLeft: 20,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 86 : 30,
    },
    navigateBtnContainer: {
        borderRadius: 8,
        backgroundColor: colors.DEFAULT_WHITE,
        height: 24,
        width: 24,
    },
    icon: {
        height: 30,
        width: 30,
    },
    headerTitle: {
        fontSize: 22,
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.RUBIC_BOLD,
        lineHeight: 36,
        marginLeft: 19,
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.RUBIC_BOLD,
        lineHeight: 36,
        marginTop:38,
    },
    subTitle: {
        fontSize: 14,
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.RUBIC_REGULAR,
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal:22,
        marginTop:10,
    },
    iconSize:{
        height:18,
        width:18,
    },
    bottomContainer:{
        flexDirection:'column',
    },
    imgContainer:{
        height:130,
        width:130,
        borderRadius:100,
        marginTop:22,
        marginBottom:30,
    },
    coverImg:{
        height:'100%',
        width:'100%',
        borderRadius:100,
        // overflow:'hidden',
    },
    coverImage:{
        borderRadius:100,
        height:36,
        width:36,
        right:-10,
        bottom:20,
        position:'absolute',
    },
    cameraIcon:{
        height:18,
        width:18,
        position:'absolute',
        right:-2 ,
        top:90,
    },
    detailsContainer:{
        // backgroundColor:colors.DEFAULT_WHITE,
        marginTop:22,
        paddingHorizontal:0,
    },
    boldTxt:{
        fontSize: 18,
        color: colors.LIGHT_BLACK,
        fontFamily: Fonts.RUBIC_MEDIUM,
        lineHeight: 24,
        marginLeft:24,
        marginBottom:20,
    },
    detailsSubContainer:{
        backgroundColor:colors.DEFAULT_WHITE,
        flexDirection:'column',
        height:60,
        marginHorizontal:24,
        borderRadius:8,
        paddingHorizontal:24,
        marginBottom:20,
    },
    highlightTitle:{
        fontSize: 10,
        color: colors.LIGHT_GREEN,
        fontFamily: Fonts.RUBIC_MEDIUM,
        lineHeight: 24,
    },
    inputTitle:{
        fontSize: 16,
        color: colors.VIOLET,
        fontFamily: Fonts.RUBIC_LIGHT,
        lineHeight: 24,
    },
    setSpacing:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    editBtn:{
        height:14,
        width:15,
        alignItems:'center',
    },
});
export default styles;
