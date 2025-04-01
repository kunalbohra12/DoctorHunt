import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        paddingTop:22,
        borderRadius:6,
    },
    itemContainer:{
        flexDirection:'column',
        height:527,
        marginBottom:20,
        borderRadius:6,
        backgroundColor:colors.DEFAULT_WHITE,
    },
    itemSubContainer:{
        flexDirection:'column',
        paddingTop:9,
        marginBottom:20,
        backgroundColor:colors.DEFAULT_WHITE,
        marginLeft:20,
        gap:6,
    },
    itemTitle:{
        fontSize: 16,
        fontFamily:Fonts.RUBIC_MEDIUM,
        color: colors.DEFAULT_BLACK,
    },
    itemSubTitle:{
        fontSize: 14,
        fontFamily:Fonts.RUBIC_LIGHT,
        color: colors.VIOLET,
    },
    btnContainer:{
        height:32,
        width:130,
        borderWidth:2,
        borderColor:colors.LIGHT_GREEN,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        marginTop:12,
    },
    btnTxt:{
        fontSize: 12,
        fontFamily:Fonts.RUBIC_REGULAR,
        color: colors.LIGHT_GREEN,
    },
    imgContainer:{
        height:300,
        width:'100%',
        borderRadius:12,
    },
    image:{
        height:'100%',
        width:'100%',
    },
    bottomContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        justifyContent:'space-between',
        marginTop:11,
        alignItems:'center',
    },
    bottomSubContainer:{
        flexDirection:'column',
    },
    buttonItem:{
        height:32,
        width:110,
        backgroundColor:colors.LIGHT_GREEN,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
        marginTop:12,
    },
    btnTitle:{
        fontSize: 12,
        fontFamily: Fonts.RUBIC_REGULAR,
        color: colors.DEFAULT_WHITE,
    },
    boldTxt:{
        fontSize: 18,
        fontFamily:Fonts.RUBIC_BOLD,
        color: colors.DEFAULT_BLACK,
        marginRight:15,
    },
    mediumTxt:{
        fontSize: 16,
        fontFamily:Fonts.RUBIC_MEDIUM,
        color: colors.VIOLET,
        marginRight:5,
    },
    highlightTxt:{
        fontSize: 14,
        fontFamily:Fonts.RUBIC_LIGHT,
        color: colors.LIGHT_GREEN,
    },
    topContainer:{
        flexDirection:'row',
        alignItems:'center',
   },
   bottomTxt:{
    fontSize: 14,
        fontFamily:Fonts.RUBIC_LIGHT,
        color: colors.VIOLET,
   },

});
export default styles;
