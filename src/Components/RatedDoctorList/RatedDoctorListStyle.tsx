import { StyleSheet } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';
const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        paddingBottom:80,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: colors.DEFAULT_WHITE,
        borderRadius: 8,
        marginTop: 12,
        marginHorizontal: 20,
        padding: 12,
    },
    shimmer: {
        width: '100%',
        height: 100,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
      },
    itemImage: {
        height: 82,
        width: 82,
    },
    icon:{
        height:17,
        width:20,
    },
    imageContainer: {
        borderRadius: 8,
    },
    setSpacing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:'85%',
    },
    title: {
        fontSize: 18,
        color: colors.LIGHT_BLACK,
        lineHeight: 21,
        fontFamily: Fonts.RUBIC_LIGHTITALIC,
        marginTop: 5,
        width:'70%',
    },
    subTitle: {
        fontSize: 12,
        color: colors.LIGHT_VIOLET,
    },
    itemSubContainer: {
        flexDirection: 'column',
        marginTop: 12,
        marginHorizontal:20,
    },
    subRatedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:5,
        marginTop:5,
    },
    rateIcon:{
        height:12,
        width:12,
    },
    boldTxt:{
        fontSize: 16,
        color: colors.DEFAULT_BLACK,
        lineHeight: 18,
        fontFamily:Fonts.RUBIC_BOLD,
        fontWeight:'700',
    },
    regularTxt:{
        fontSize: 16,
        color: colors.VIOLET,
        lineHeight: 20,
        fontFamily:Fonts.RUBIC_REGULAR,
        fontWeight:'400',
    },
});
export default styles;
