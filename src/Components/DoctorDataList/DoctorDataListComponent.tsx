import { View, Image, FlatList, Text, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './DoctorDataListStyle';
import images from '../../HelperFiles/Images';
import { getCartsData } from '../../HelperFiles/api/AuthApiService';
const DoctorDataListComponent = () => {

    const [refreshing, setRefreshing] = useState(true);
    const [doctorsData, setCartsData] = useState([]);
    const getProductsData = async () => {
        try {
            setRefreshing(true);
            const response = await getCartsData();
            console.log(response);
            if (doctorsData) {
                setRefreshing(false);
                setCartsData(response?.carts);
                console.log('Item ID', response?.carts?.id);
            } else {
                console.log('Carts Data is null');
            }
        } catch (error) {
            console.error('Carts data Failed:', error);
        } 
    };
    const onRefresh = async () => {
        setRefreshing(true);
        await getProductsData();
        setRefreshing(false);
    };

    useEffect(() => {
        getProductsData();
    }, []);

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
               {doctorsData.products.map((product) => (
                    <View key={product.id} style={styles.itemContainer}>
                        <View style={styles.subContainer}>
                            <Image source={product.image} style={styles.itemImage} />
                            <View style={styles.contentContainer}>
                                <Text style={styles.highlightTxt}>{product.name}</Text>
                                <Text style={styles.mediumTxt}>{product.specialization}</Text>
                                <Text style={styles.regularTxt}>{product.experience}</Text>
                                <View style={styles.stackContainer}>
                                    <View style={styles.subContainer}>
                                        <View style={styles.roundedView} />
                                        <Text style={styles.regularTxt}>{product.rating}</Text>
                                    </View>
                                    <View style={styles.subContainer}>
                                        <View style={styles.roundedView} />
                                        <Text style={styles.regularTxt}>{product.patientStories}</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={product.likeIcon} style={styles.icon} />
                        </View>
                        <View style={styles.bottomContainer}>
                            <View style={styles.bottomSubContainer}>
                                <Text style={styles.highlightTxt}>Next Available </Text>
                                <Text style={styles.title}>
                                    10:00 <Text style={styles.subTitle}>{product.category}</Text>
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.btnTitle}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={cartsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
};

export default DoctorDataListComponent;
