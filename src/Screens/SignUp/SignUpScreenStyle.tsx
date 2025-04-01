import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
container:{
    flex:1,
    width:'100%',
},
topContainer:{
    flexDirection:'column',
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:127,
},
title:{
    fontSize:24,
    fontWeight:'400',
    color:colors.DARK_BLACK,
    lineHeight:28,
},
subTitle:{
    fontSize:14,
    fontWeight:'400',
    color:colors.LIGHT_VIOLET,
    textAlign:'center',
    marginTop:6,
    lineHeight:28,
},
buttonContainer:{
    flexDirection:'row',
    marginTop:78,
    gap:30,
    marginBottom:38,
    justifyContent:'center',
    alignItems:'center',

},
btnStyle:{
    flexDirection:'row',
    height:54,
    width:160,
    gap:5,
    backgroundColor:colors.DEFAULT_WHITE,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
},
btnIcon:{
    height:19,
    width:19,
},
btnTitle:{
    fontSize:16,
    fontWeight:'300',
    lineHeight:18,
    color:colors.DARK_BLACK,
},
inputContainer:{
    flexDirection:'row',
    borderColor:colors.BLUR_VIOLET,
    borderWidth:2,
    marginBottom:18,
    height:54,
    borderRadius:12,
    marginHorizontal:20,
    paddingLeft:15,
    paddingRight:0,
    alignItems:'center',
},
input:{
    height:50,
    width:'80%',
    color:colors.VIOLET,
},
highlightTxt:{
    fontSize:16,
    fontWeight:'400',
    lineHeight:16,
    color:colors.LIGHT_GREEN,
    textAlign:'center',
},
bottomTxt:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:16,
    color:colors.LIGHT_GREEN,
    textAlign:'center',
},
bottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:60,
    paddingBottom:15,
},
icon:{
    height:14,
    width:17,
    marginLeft:15,
},
btnContainer:{
    paddingHorizontal:40,
    marginTop:55,
},
checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
export default styles;
