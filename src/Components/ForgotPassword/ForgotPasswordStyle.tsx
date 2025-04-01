import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
  },
  modalContainer: {
    width: '100%',
    paddingHorizontal: 20,
    height:390,
    paddingTop:44,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopRightRadius:30,
    elevation: 5,
    position:'absolute',
    bottom:0,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight:28,
    color:colors.DEFAULT_BLACK,
  },
  subLabel: {
    fontSize: 14,
    marginVertical: 10,
    color:colors.VIOLET,
  },
  inputContainer:{
    flexDirection:'row',
    marginBottom:37,
    marginTop:35,
    alignItems:'center',
},
input:{
    height:50,
    width:'100%',
    color:colors.VIOLET,
    paddingHorizontal:10,
},

});
