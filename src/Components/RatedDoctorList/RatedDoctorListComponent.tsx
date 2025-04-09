import { View, Text, Image, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './RatedDoctorListStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
import { getProducts } from '../../HelperFiles/api/AuthApiService';

const RatedDoctorsListComponent = () => {
    const [isLoading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false)
    const [productsData, setProductData] = useState([]);
    const [liked, setLiked] = useState(false);
    // const ShimmerPlaceholder = createShimmerPlaceholder();
    const getProductsAPI = async () => {
        try {
            setLoading(true);
            const response = await getProducts();
            console.log(response);
            if (productsData) {
                setProductData(response?.products);
                setLoading(false);
            } else {
                console.log('products Data is null');
            }
        } catch (error) {
            console.error('Products Data Failed:', error);
        }
    };

    useEffect(() => {
        getProductsAPI();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                </View>
                <View style={styles.itemSubContainer}>
                    <View style={styles.setSpacing}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => setLiked(!liked)}>
                        <Image source={images.LIKE_ICON} tintColor={liked ? colors.RED : colors.GREYISH} style={styles.iconsize} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.subTitle}>{item.category}</Text>
                    <View style={styles.setSpacing}>
                        <View style={styles.subRatedContainer}>
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                            <Image source={images.UNRATED_ICON} tintColor={colors.YELLOW} style={styles.rateIcon} />
                        </View>
                        <Text style={styles.boldTxt}>{item.rating}<Text style={styles.regularTxt}>({item.discountPercentage} views)</Text></Text>
                    </View>
                </View>
            </View>
        );
    };


    return (
        <View style={styles.listContainer}>
            <FlatList
                data={productsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
};

export default RatedDoctorsListComponent;
