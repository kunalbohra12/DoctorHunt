import { View, Image, FlatList, Text, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './DoctorDataListStyle';
import { getCartsData } from '../../HelperFiles/api/AuthApiService';
import BgAnimationComponent from '../BgAnimation/BgAnimationComponent';
import { useNavigation } from '@react-navigation/native';
const DoctorDataListComponent = () => {

    const [refreshing, setRefreshing] = useState(true);
    const [doctorsData, setCartsData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigation();

    const getProductsData = async () => {
        try {
            setRefreshing(true);
            setLoading(true);
            const response = await getCartsData();
            console.log(response);
            if (doctorsData) {
                setRefreshing(false);
                setLoading(false);
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
            <View style={styles.itemOuterContainer}>
                {doctorsData.map((item) => (
                    <View key={item.id} style={styles.itemInnerContainer}>
                        {item.products.map((product) => (
                            <View key={product.id} style={styles.itemContainer}>
                                <View style={styles.subContainer}>
                                    <Image source={{ uri: product.thumbnail }} style={styles.itemImage} />
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.highlightTxt}>{product.id}</Text>
                                        <Text style={styles.mediumTxt}>{product.title}</Text>
                                        <Text style={styles.regularTxt}>{product.price}</Text>
                                        <View style={styles.stackContainer}>
                                            <View style={styles.subContainer}>
                                                <View style={styles.roundedView} />
                                                <Text style={styles.regularTxt}>87%</Text>
                                            </View>
                                            <View style={styles.subContainer}>
                                                <View style={styles.roundedView} />
                                                <Text style={styles.regularTxt}>67 patient stories</Text>
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
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SelectTimeScreen')}>
                                        <Text style={styles.btnTitle}>Book Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            {isLoading ? (
                <BgAnimationComponent />
            ) : (
                <FlatList
                    data={doctorsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
            )}
        </View>
    );
};

export default DoctorDataListComponent;
