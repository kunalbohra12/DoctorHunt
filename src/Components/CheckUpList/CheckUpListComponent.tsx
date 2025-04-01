import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './CheckUpListComponentStyle';
import { getCategoriesData } from '../../HelperFiles/api/AuthApiService';

const CheckUpListComponent = () => {

    const [getCategories,setCategories] = useState();
    const getCategoriesAPI = async () => {
        try {
            const response = await getCategoriesData();
            console.log('API Response:', response);
            if (response) {
                setCategories(response);
                console.log(response.url);
                console.log('State Updated:', response.data);
            } else {
                console.log('No data in API response:', response);
            }
        } catch (error) {
            console.error('Error Fetching Categories:', error);
        }
    };
    useEffect(() => {
        getCategoriesAPI();
    },[]);
    const renderUI = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemSubContainer}>
                    <Text style={styles.itemTitle}>{item.slug}</Text>
                    <Text style={styles.itemSubTitle}>{item.title}</Text>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnTxt}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: item.url }} style={styles.image} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomSubContainer}>
                        <View style={styles.topContainer}>
                            <Text style={styles.boldTxt}>{item.slug}</Text>
                            <Text style={styles.mediumTxt}>$ 330</Text>
                            <Text style={styles.highlightTxt}>35% OFF</Text>
                        </View>
                        <Text style={styles.bottomTxt}>+ 10% Health cashback T&C</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonItem}>
                        <Text style={styles.btnTitle}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={getCategories}
                renderItem={renderUI}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CheckUpListComponent;
