import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
const styles = StyleSheet.create({
    // container:{
    //     marginHorizontal:15,
    // },
    headerView: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:20,

    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.LIGHT_BLACK,
    },
    headerSubTitle: {
        fontSize: 12,
        fontWeight: '300',
        color: colors.LIGHT_VIOLET,
    },
    headerIcon: {
        height: 6,
        width: 3,
    },
    headerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginRight: 15,
    },
    itemContainer:{
        flexDirection:'column',
        marginRight:20,
        height:264,
        width:190,
        backgroundColor:colors.DEFAULT_WHITE,
        borderRadius:12,
        marginTop:12,
        marginHorizontal:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom:20,
    },
    itemImage:{
        height:180,
        width:190,
    },
    title:{
        fontSize: 18,
        fontWeight: '500',
        color: colors.LIGHT_BLACK,
        lineHeight:21,
        textAlign:'center',
    },
    subTitle:{
        fontSize: 12,
        fontWeight: '300',
        color: colors.LIGHT_VIOLET,
        textAlign:'center',
    },
    itemSubContainer:{
        flexDirection:'column',
        marginTop:12,
    },
    subRatedContainer:{
        flexDirection:'row',
        paddingHorizontal:28,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:6,
        gap:3,
    },
    icon:{
        height:9,
        width:9,
    },
});
export default styles;
