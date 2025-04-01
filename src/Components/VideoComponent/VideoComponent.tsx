import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './VideoComponentStyle';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import images from '../../HelperFiles/Images';
import { useNavigation } from '@react-navigation/native';
const VideoFlatList = () => {
    const videoData = [
        { id: '1', image: images.VIDEO_BG },
        { id: '2', image: images.VIDEO_BG },
        { id: '3', image: images.VIDEO_BG },
        { id: '4', image: images.VIDEO_BG },
        { id: '5', image: images.VIDEO_BG },
        { id: '6', image: images.VIDEO_BG },
        { id: '7', image: images.VIDEO_BG },
    ];
    const navigation = useNavigation();
    const renderItem = ({ }: any) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('LiveChatScreen')}>
                <ImageBackground source={images.VIDEO_BG} style={styles.videoContainer}>
                    <View style={styles.blurredView}>
                        {/* <View style={styles.videoContainer}>
                            <View style={styles.roundedContainer} />
                            <Text style={styles.title}>LIVE</Text>
                        </View> */}
                        <Image style={styles.logo} source={images.PLAY_ICON} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <Text style={GlobalStyles.headerTitle}>Live Videos</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={videoData} />
        </View>
    );
};
export default VideoFlatList;
