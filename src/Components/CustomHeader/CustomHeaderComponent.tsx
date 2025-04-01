import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './CustomHeaderStyle';
import images from '../../HelperFiles/Images';
import { useNavigation } from '@react-navigation/native';
const CustomHeaderComponent = ({ title, isVisible }: any) => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={images.BACK_ICON} style={styles.headerIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            {isVisible &&
                (<Image source={images.SEARCH_ICON} style={styles.rightIcon} />)
            }
        </View>
    );
};

export default CustomHeaderComponent;
