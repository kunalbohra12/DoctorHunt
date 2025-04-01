import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './DoctorListComponentStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';

const DoctorsListComponent = () => {
    const DATA = [
        { id: '1', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '2', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '3', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '4', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '5', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },

    ];

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={images.DOCTOR_IMAGE} style={styles.itemImage} />
                <View style={styles.itemSubContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                    <View style={styles.subRatedContainer}>
                        <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.icon} />
                        <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.icon} />
                        <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.icon} />
                        <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.icon} />
                        <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.icon} />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View>
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Popular Doctors</Text>
                <TouchableOpacity style={styles.headerBtn}>
                    <Text style={styles.headerSubTitle}>See all</Text>
                    <Image source={images.Right_ARROW} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default DoctorsListComponent;
