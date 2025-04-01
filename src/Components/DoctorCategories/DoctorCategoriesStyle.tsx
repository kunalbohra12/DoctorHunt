import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        marginTop:22,
        paddingHorizontal:20,
    },
    itemContainer:{
        flexDirection:'column',
        height:170,
        backgroundColor:colors.DEFAULT_WHITE,
        borderRadius:12,
        marginTop:12,
        paddingHorizontal:22,
        paddingVertical:14,
        marginBottom:10,
    },
});
export default styles;
