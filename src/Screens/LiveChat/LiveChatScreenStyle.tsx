import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../HelperFiles/Colors';
import Fonts from '../../HelperFiles/Fonts';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.DEFAULT_WHITE,
    },
    headerTitle: {
        fontFamily: Fonts.RUBIC_MEDIUM,
        fontSize: 18,
        color: colors.DEFAULT_BLACK,
        marginLeft: 16,
        flex: 1,
    },
    doctorStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    doctorName: {
        fontFamily: Fonts.RUBIC_REGULAR,
        fontSize: 14,
        color: colors.DEFAULT_BLACK,
    },
    backIcon: {
        width: 24,
        height: 24,
        marginRight: 16,
    },
    videoContainer: {
        width: '100%',
        height: height * 0.4,
        backgroundColor: colors.LIGHT_BLACK,
        position: 'relative',
    },
    connectingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.LIGHT_BLACK,
    },
    connectingText: {
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.RUBIC_MEDIUM,
        fontSize: 16,
    },
    videoStream: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.DEFAULT_BLACK,
    },
    fullScreenVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    videoStreamContent: {
        width: '100%',
        height: '100%',
    },
    smallVideoStream: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 100,
        height: 150,
        backgroundColor: colors.DEFAULT_BLACK,
        borderRadius: 8,
        overflow: 'hidden',
        zIndex: 2,
    },
    participantName: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.RUBIC_REGULAR,
        fontSize: 14,
    },
    videoControls: {
        position: 'absolute',
        bottom: 16,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    controlButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.DEFAULT_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    controlIcon: {
        width: 20,
        height: 20,
        tintColor: colors.DEFAULT_BLACK,
    },
    disabledIcon: {
        tintColor: colors.GREYISH,
    },
    chatSection: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
    },
    commentsList: {
        paddingHorizontal: 16,
    },
    commentContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'flex-start',
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    timestamp: {
        fontFamily: Fonts.RUBIC_REGULAR,
        fontSize: 12,
        color: colors.GREYISH,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    commentContent: {
        flex: 1,
    },
    userName: {
        fontFamily: Fonts.RUBIC_MEDIUM,
        fontSize: 16,
        color: colors.DEFAULT_BLACK,
    },
    commentText: {
        fontFamily: Fonts.RUBIC_REGULAR,
        fontSize: 14,
        color: colors.GREYISH,
        lineHeight: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: colors.GREYISH,
        backgroundColor: colors.DEFAULT_WHITE,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: colors.LIGHT_BLACK,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginRight: 12,
        fontFamily: Fonts.RUBIC_REGULAR,
        fontSize: 14,
        color: colors.DEFAULT_BLACK,
    },
    sendIcon: {
        width: 24,
        height: 24,
        tintColor: colors.LIGHT_GREEN,
    },
});

export default styles;
