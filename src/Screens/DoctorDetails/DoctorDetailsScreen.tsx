import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import RatedDoctorsListComponent from '../../Components/RatedDoctorList/RatedDoctorListComponent';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
const DoctorDetailsScreen = () => {
  return (
    <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
    <SafeAreaView style={[GlobalStyles.gradientBG]}>
        <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.LIGHT_GREEN}
            hidden={false} />
            <CustomHeaderComponent title={'Doctors Details'} />
            <RatedDoctorsListComponent />
    </SafeAreaView>
</ImageBackground>
  );
};

export default DoctorDetailsScreen;