import { View, FlatList, Image, Text } from 'react-native';
import React from 'react';
import images from '../../HelperFiles/Images';
import styles from './TestsListStyle';
import LinearGradient from 'react-native-linear-gradient';

const TestListsComponent = () => {
    const DATA = [
        { id: '1', image: images.HOME_ICON, gradient: ['#2753F3', '#765AFC'], title: 'Free home Sample pickup' },
        { id: '2', image: images.LAB_ICON, gradient: ['#FF484C', '#FF6C60'], title: 'Practo asociate labs' },
        { id: '3', image: images.FILE_ICON, gradient: ['#FE7F44', '#FFCF68'], title: 'E-Reports in 24-72 hours' },
        { id: '4', image: images.MACHINE_ICON, gradient: ['#0EBE7E', '#07D9AD'], title: 'Free follow-up with doctor' },
    ];
    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.gridItem}>
                <LinearGradient colors={item.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.itemContainer]}>
                    <Image source={item.image} style={styles.icon} />
                </LinearGradient>
                <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default TestListsComponent;
