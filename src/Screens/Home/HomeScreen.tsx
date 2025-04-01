import { View, StatusBar, Text, ImageBackground, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './HomeScreenStyle';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import images from '../../HelperFiles/Images';
import VideoFlatList from '../../Components/VideoComponent/VideoComponent';
import SpecializedListComponent from '../../Components/SpecializedList/SpecializedListComponent';
import DoctorsListComponent from '../../Components/DoctorsList/DoctorsListComponent';
import FeatureDoctorListComponent from '../../Components/FeatureDoctor/FeatureDoctorListComponent';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[GlobalStyles.gradientBG, GlobalStyles.safeAreaBg]}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.LIGHT_GREEN}
                hidden={false}
            />
            <View style={[GlobalStyles.columnContainer]}>
                <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
                    <View style={styles.topContainer}>
                        <View style={styles.topSubContainer}>
                            <Text style={styles.title}>Hi Handwerker! </Text>
                            <Text style={styles.subTitle}>Find Your Doctor</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                            <Image source={images.USER} style={styles.imgContainer} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={GlobalStyles.searchBar} onPress={() => navigation.navigate('FindDoctorScreen')}>
                        <Image source={images.SEARCH_ICON} style={styles.logo} />
                        <Text style={styles.searchInput}>Search..</Text>
                        <Image source={images.CROSS_ICON} style={styles.logo} />
                    </TouchableOpacity>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.listContainer}>
                            <VideoFlatList />
                            <SpecializedListComponent />
                            <DoctorsListComponent />
                            <FeatureDoctorListComponent />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
