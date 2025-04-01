import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
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
        marginTop:80,
    },
    bgImage: {
       height:460,
       width:'99%',
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        lineHeight: 33,
        color:colors.LIGHT_BLACK,
    },
    subTitle:{
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 23,
        color:colors.LIGHT_VIOLET,
        textAlign:'center',
        marginTop:11,
        marginBottom:20,
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
    },
});
export default styles;
