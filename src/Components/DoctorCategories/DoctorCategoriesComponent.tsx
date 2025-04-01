import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './DoctorCategoriesStyle';
import images from '../../HelperFiles/Images';

const DoctorCategoriesComponent = () => {
    const DATA = [
        { id: '1', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '2', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '3', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '4', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },
        { id: '5', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Tooths Dentist' },

    ];
    const renderUI = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.title}</Text>
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={DATA}
                renderItem={renderUI}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default DoctorCategoriesComponent;