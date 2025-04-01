import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    gridItem: {
        flexDirection:'row',
        flex:2,
        alignItems:'center',
        marginBottom:35,
    },
    itemTitle:{
        fontSize:15,
        fontWeight:'400',
        color:colors.DEFAULT_BLACK,
        width:'50%',
        lineHeight:22,
    },
    itemContainer: {
        flexDirection: 'row',
        height: 52,
        width: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        height: 20,
        width: 20,
    },
    listContainer: {
        flexDirection: 'row',
        marginTop:34,
    },
});
export default styles;
