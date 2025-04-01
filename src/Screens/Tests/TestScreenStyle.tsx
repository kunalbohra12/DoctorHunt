import { StyleSheet } from 'react-native';
import Fonts from '../../HelperFiles/Fonts';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    overlayView:{
       height:214,
       width:214,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:colors.GREEN,
       marginBottom:30,
       borderRadius:100,
    },
    bgImage:{
        height:112,
        width:123,
    },
    title:{
        fontFamily:Fonts.RUBIC_MEDIUM,
        fontSize:20,
        color:colors.LIGHT_BLACK,
    },
    subTitle:{
        fontFamily:Fonts.RUBIC_REGULAR,
        fontSize:16,
        color:colors.VIOLET,
    },
});
export default styles;
