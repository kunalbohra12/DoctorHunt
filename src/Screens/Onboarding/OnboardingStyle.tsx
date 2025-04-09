import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    fullContainer:{
        flex:1,
    },
    gradientBG:{
        flex:1,
        resizeMode:'contain',
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:91,
    },
    bgImage: {
       height:336,
       width:336,
       marginTop:20,
    },
    title: {
        fontSize: 28,
        lineHeight: 33,
        fontFamily:Fonts.RUBIC_MEDIUM,
        marginTop:84,
        color:colors.LIGHT_BLACK,
        textAlign:'center',
    },
    subTitle:{
        fontSize: 14,
        fontFamily:Fonts.RUBIC_MEDIUM,
        lineHeight: 23,
        color:colors.LIGHT_VIOLET,
        textAlign:'center',
        marginTop:11,
    },
    logo: {
        width: 70,
        height: 70,
    },
    buttonStyle:{
        height:52,
        width:'100%',
        marginTop:6,
        justifyContent:'center',
        alignItems:'center',
    },
    lottie:{
        height:70,
        width:70,
    },
    pagerView:{
        flex:1,
    },
    bottomContainer:{
        marginHorizontal:40,
        marginTop:80,
    },
    btnTitle:{
        fontSize: 18,
        fontFamily:Fonts.RUBIC_REGULAR,
        color:colors.DEFAULT_WHITE,
    },
});
export default styles;
