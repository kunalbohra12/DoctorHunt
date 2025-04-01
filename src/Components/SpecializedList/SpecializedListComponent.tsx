import { View, FlatList, Image } from 'react-native';
import React from 'react';
import images from '../../HelperFiles/Images';
import styles from './SpecializedListStyle';
import LinearGradient from 'react-native-linear-gradient';

const SpecializedListComponent = () => {
    const DATA = [
        { id: '1', image: images.TEETH_ICON, gradient: ['#2753F3', '#765AFC'] },
        { id: '2', image: images.TEETH_ICON, gradient: ['#0EBE7E', '#07D9AD']},
        { id: '3', image: images.TEETH_ICON, gradient: ['#FE7F44', '#FFCF68'] },
        { id: '4', image: images.TEETH_ICON, gradient: ['#FF484C', '#FF6C60'] },
    ];

    const renderItem = ({ item }: any) => {
        return (
            <LinearGradient colors={item.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.itemContainer]}>
                    <Image source={item.image} style={styles.icon} />
            </LinearGradient>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default SpecializedListComponent;
