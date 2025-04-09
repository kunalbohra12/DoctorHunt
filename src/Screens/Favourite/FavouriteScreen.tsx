import { Image, ImageBackground, SafeAreaView, StatusBar,TextInput,View } from 'react-native';
import React from 'react';
// import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import images from '../../HelperFiles/Images';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import RatedDoctorsListComponent from '../../Components/RatedDoctorList/RatedDoctorListComponent';
import colors from '../../HelperFiles/Colors';
import styles from '../FindDoctor/FindDoctorScreenStyle';
const FavouriteDoctorScreen = () => {
    return (
         <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
             <SafeAreaView style={[GlobalStyles.gradientBG]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.LIGHT_GREEN}
                    hidden={true} />
                  {/* <View style={[GlobalStyles.columnContainer]}> */}
                     <CustomHeaderComponent title={'Doctors'} />
                     <View style={GlobalStyles.searchBar}>
                         <Image source={images.SEARCH_ICON} style={styles.logo} />
                       <TextInput style={styles.searchInput} placeholder="Search.." placeholderTextColor={colors.LIGHT_VIOLET} />
                         <Image source={images.CROSS_ICON} style={styles.logo} />
                    </View>
                    <RatedDoctorsListComponent />
                 {/* </View> */}
          </SafeAreaView>
         </ImageBackground>
    );
};

export default FavouriteDoctorScreen;
