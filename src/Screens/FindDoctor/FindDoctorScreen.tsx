import { Image, ImageBackground, SafeAreaView, StatusBar, TextInput, View } from 'react-native';
import React from 'react';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import images from '../../HelperFiles/Images';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import styles from '../FindDoctor/FindDoctorScreenStyle';
import DoctorDataListComponent from '../../Components/DoctorDataList/DoctorDataListComponent';
const FindDoctorScreen = () => {
    return (
        <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
            <SafeAreaView style={[GlobalStyles.gradientBG]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.DEFAULT_WHITE}
                    hidden={false}
                />
                {/* <View style={[GlobalStyles.gradientBG]}> */}
                    <CustomHeaderComponent title={'Find Doctors'} />
                    <View style={GlobalStyles.searchBar}>
                        <Image source={images.SEARCH_ICON} style={styles.logo} />
                        <TextInput style={styles.searchInput} placeholder="Search.." placeholderTextColor={colors.LIGHT_VIOLET} />
                        <Image source={images.CROSS_ICON} style={styles.logo} />
                    </View>
                    <DoctorDataListComponent />
                {/* </View> */}
            </SafeAreaView>
        </ImageBackground>

    );
};

export default FindDoctorScreen;
