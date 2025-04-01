import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './FeatureDoctorListStyle';
import images from '../../HelperFiles/Images';

const FeatureDoctorListComponent = () => {
    const DATA = [
        { id: '1', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '2', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '3', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '4', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },
        { id: '5', img: images.ONBOARD_BG, title: 'Dr. Fillerup Grab', subTitle: 'Medicine Specialist' },

    ];

    const renderItem = () => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemHeaderContainer}>
                    <Image source={images.LIKE_ICON} style={styles.icon} />
                    <View style={styles.detailsContainer}>
                        <Image source={images.UNRATED_ICON} style={styles.icon} />
                        <Text style={styles.title}>3.7</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Image source={images.USER_ICON} style={styles.userIcon} />
                    <Text style={styles.mediumTxt}>Dr.Crick</Text>
                    <Text style={styles.regularTxt}><Text style={styles.highlightTxt}>$</Text>22.00/ hours</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>Feature Doctor</Text>
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

export default FeatureDoctorListComponent;
