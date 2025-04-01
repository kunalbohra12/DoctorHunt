import { View, Text, StatusBar, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import CustomHeaderComponent from '../../Components/CustomHeader/CustomHeaderComponent';
import colors from '../../HelperFiles/Colors';
import images from '../../HelperFiles/Images';
import styles from './DiagonsticsTestScreenStyle';
import TestListsComponent from '../../Components/TestsList/TestsListComponent';
import CheckUpListComponent from '../../Components/CheckUpList/CheckUpListComponent';
const DiagonsticsTestScreen = () => {

    return (
        <ImageBackground source={images.GRADIENT_BG} style={GlobalStyles.gradientBG}>
            <SafeAreaView style={[GlobalStyles.gradientBG]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.LIGHT_GREEN}
                    hidden={true} />
                {/* <View style={[GlobalStyles.columnContainer]}> */}
                    <CustomHeaderComponent title={'Diagonstics Tests'} />
                    <ScrollView  showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            <Text style={styles.title}>Get Full body health checkups
                                from the comfort of your home.</Text>
                            <Text style={styles.subTitle}>Upto 45% off + get 10% healthcash back</Text>
                            <TestListsComponent />
                            <CheckUpListComponent />
                        </View>
                    </ScrollView>
                {/* </View> */}
            </SafeAreaView>
        </ImageBackground>

    );
};

export default DiagonsticsTestScreen;
