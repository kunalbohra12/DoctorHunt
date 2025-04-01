import { Text, ImageBackground, StatusBar, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import images from '../../HelperFiles/Images';
import styles from './OnboardingStyle';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import ButtonComponent from '../../Components/ButtonComponent';
import PagerView from 'react-native-pager-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const OnboardingScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();


    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={'00000000'}
                hidden={true}
            />
            <ImageBackground source={images.GRADIENT_BG} style={styles.gradientBG}>
                <PagerView style={styles.pagerView} initialPage={0} onPageSelected={(e) => console.log(e.nativeEvent.position)}>
                    <View key="1" style={styles.fullContainer}>
                        <Image source={images.ONBOARD_BG} resizeMode="stretch" style={styles.bgImage} />
                        <View style={[styles.container, GlobalStyles.containerPadding]}>
                            <Text style={styles.title}>Find Trusted Doctors</Text>
                            <Text style={styles.subTitle}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.</Text>
                    </View>
                    </View>
                    <View key="2" style={styles.fullContainer}>
                        <Image source={images.ONBOARD_BG2} resizeMode="stretch" style={styles.bgImage} />
                        <View style={[styles.container, GlobalStyles.containerPadding]}>
                            <Text style={styles.title}>Choose Best Doctors</Text>
                            <Text style={styles.subTitle}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.</Text>
                        </View>
                    </View>
                    <View key="3">
                        <Image source={images.ONBOARD_BG3} resizeMode="stretch" style={styles.bgImage} />
                        <View style={[styles.container, GlobalStyles.containerPadding]}>
                            <Text style={styles.title}>Easy Appointments</Text>
                            <Text style={styles.subTitle}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.</Text>
                        </View>
                    </View>
                </PagerView>
                <View style={styles.bottomContainer}>
                    <ButtonComponent
                        title="Get Started"
                        onPress={() => navigation.navigate('BottomTabBarScreen')}
                        buttonStyle={GlobalStyles.btnStyle}
                        textStyle={GlobalStyles.btnTxtStyle}
                    />
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('BottomTabBarScreen')}>
                        <Text style={GlobalStyles.btnTxtStyle}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
};




export default OnboardingScreen;
