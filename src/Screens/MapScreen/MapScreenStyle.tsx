import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        height: '100%',
        width: '100%',
    },
    mapAction: {
        alignItems: 'center',
        position: 'absolute',
        justifyContent:'center',
        backgroundColor: 'green',
        bottom: 20,
        alignSelf:'center',
        marginHorizontal:20,
        width:300,
        height:60,
    },
    btnTxt:{
        fontSize:18,
        color:colors.DEFAULT_WHITE,
        fontWeight:'500',
    },
});
export default styles;
