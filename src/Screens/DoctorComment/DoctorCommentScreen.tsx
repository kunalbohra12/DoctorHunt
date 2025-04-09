// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     ImageBackground,
//     SafeAreaView,
//     FlatList,
//     StyleSheet,
//     Dimensions,
//     KeyboardAvoidingView,
//     Platform,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import images from '../../HelperFiles/Images';
// import colors from '../../HelperFiles/Colors';
// import Fonts from '../../HelperFiles/Fonts';

// interface Comment {
//     id: string;
//     name: string;
//     avatar: any;
//     message: string;
//     timestamp: Date;
// }

// const DoctorCommentScreen = () => {
//     const navigation = useNavigation();
//     const [comment, setComment] = useState('');
//     const [isMuted, setIsMuted] = useState(false);
//     const [isCameraOff, setIsCameraOff] = useState(false);
//     const [isFullScreen, setIsFullScreen] = useState(false);

//     const comments: Comment[] = [
//         {
//             id: '1',
//             name: 'Everhart Tween',
//             avatar: images.USER,
//             message: 'Thanks for sharing doctor ❤️',
//             timestamp: new Date()
//         },
//         {
//             id: '2',
//             name: 'Bonebrake Mash',
//             avatar: images.USER,
//             message: 'They treat immune system disorders',
//             timestamp: new Date()
//         },
//         {
//             id: '3',
//             name: 'Handler Wack',
//             avatar: images.USER,
//             message: 'This is the largest directory 👍',
//             timestamp: new Date()
//         }
//     ];

//     const toggleMute = () => setIsMuted(!isMuted);
//     const toggleCamera = () => setIsCameraOff(!isCameraOff);
//     const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

//     const renderComment = ({ item }: { item: Comment }) => (
//         <View style={styles.commentContainer}>
//             <Image source={item.avatar} style={styles.commentAvatar} />
//             <View style={styles.commentContent}>
//                 <Text style={styles.commentName}>{item.name}</Text>
//                 <Text style={styles.commentText}>{item.message}</Text>
//             </View>
//         </View>
//     );

//     return (
//         <KeyboardAvoidingView 
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.container}
//         >
//             <View style={styles.videoContainer}>
//                 <ImageBackground
//                     source={images.DOCTOR_IMAGE}
//                     style={[styles.backgroundImage, isFullScreen && styles.fullScreenVideo]}
//                     resizeMode="cover"
//                 >
//                     <SafeAreaView style={styles.overlay}>
//                         <View style={styles.header}>
//                             <TouchableOpacity 
//                                 onPress={() => navigation.goBack()}
//                                 style={styles.backButton}
//                             >
//                                 <Image source={images.BACK_ICON} style={styles.backIcon} />
//                             </TouchableOpacity>
//                             <Image source={images.USER} style={styles.profileIcon} />
//                         </View>

//                         {/* Video Controls */}
//                         <View style={styles.videoControls}>
//                             <TouchableOpacity onPress={toggleMute} style={styles.controlButton}>
//                                 <Image 
//                                     source={images.MIC_ICON} 
//                                     style={[styles.controlIcon, isMuted && styles.disabledIcon]} 
//                                 />
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={toggleCamera} style={styles.controlButton}>
//                                 <Image 
//                                     source={images.CAMERA_ICON} 
//                                     style={[styles.controlIcon, isCameraOff && styles.disabledIcon]} 
//                                 />
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={toggleFullScreen} style={styles.controlButton}>
//                                 <Image 
//                                     source={images.FULLSCREEN_ICON} 
//                                     style={styles.controlIcon} 
//                                 />
//                             </TouchableOpacity>
//                         </View>

//                         <View style={styles.content}>
//                             <FlatList
//                                 data={comments}
//                                 renderItem={renderComment}
//                                 keyExtractor={item => item.id}
//                                 contentContainerStyle={styles.commentsList}
//                                 showsVerticalScrollIndicator={false}
//                             />

//                             <View style={styles.inputContainer}>
//                                 <TextInput
//                                     style={styles.input}
//                                     placeholder="Add a Comment......"
//                                     placeholderTextColor="#A1A8B0"
//                                     value={comment}
//                                     onChangeText={setComment}
//                                 />
//                                 <TouchableOpacity>
//                                     {/* <Image source={images.SEND_ICON} style={styles.sendIcon} /> */}
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </SafeAreaView>
//                 </ImageBackground>
//             </View>
//         </KeyboardAvoidingView>
//     );
// };

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.DEFAULT_BLACK,
//     },
//     videoContainer: {
//         flex: 1,
//     },
//     backgroundImage: {
//         width: width,
//         height: height,
//     },
//     fullScreenVideo: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 1,
//     },
//     overlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         zIndex: 2,
//     },
//     backButton: {
//         width: 40,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     backIcon: {
//         width: 24,
//         height: 24,
//         tintColor: colors.DEFAULT_WHITE,
//     },
//     profileIcon: {
//         width: 32,
//         height: 32,
//         borderRadius: 16,
//         borderWidth: 2,
//         borderColor: colors.DEFAULT_WHITE,
//     },
//     videoControls: {
//         position: 'absolute',
//         bottom: height * 0.3,
//         left: 0,
//         right: 0,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 2,
//         paddingHorizontal: 16,
//     },
//     controlButton: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         backgroundColor: colors.DEFAULT_WHITE,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginHorizontal: 8,
//     },
//     controlIcon: {
//         width: 20,
//         height: 20,
//         tintColor: colors.DEFAULT_BLACK,
//     },
//     disabledIcon: {
//         tintColor: colors.GREYISH,
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'flex-end',
//     },
//     commentsList: {
//         padding: 16,
//     },
//     commentContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 16,
//         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//         padding: 12,
//         borderRadius: 12,
//     },
//     commentAvatar: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         marginRight: 12,
//         borderWidth: 1,
//         borderColor: colors.DEFAULT_WHITE,
//     },
//     commentContent: {
//         flex: 1,
//     },
//     commentName: {
//         fontFamily: Fonts.RUBIC_MEDIUM,
//         fontSize: 14,
//         color: colors.DEFAULT_WHITE,
//         marginBottom: 4,
//     },
//     commentText: {
//         fontFamily: Fonts.RUBIC_REGULAR,
//         fontSize: 14,
//         color: colors.DEFAULT_WHITE,
//         opacity: 0.9,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: colors.DEFAULT_WHITE,
//         borderRadius: 25,
//         margin: 16,
//         paddingHorizontal: 16,
//         paddingVertical: 8,
//     },
//     input: {
//         flex: 1,
//         height: 40,
//         fontFamily: Fonts.RUBIC_REGULAR,
//         fontSize: 14,
//         color: colors.DEFAULT_BLACK,
//     },
//     sendIcon: {
//         width: 24,
//         height: 24,
//         tintColor: colors.LIGHT_GREEN,
//     },
// });

// export default DoctorCommentScreen; 