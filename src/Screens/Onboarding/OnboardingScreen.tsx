// import { Text, ImageBackground, StatusBar, TouchableOpacity, View, Image } from 'react-native';
// import React, { useState } from 'react';
// import images from '../../HelperFiles/Images';
// import styles from './OnboardingStyle';
// import GlobalStyles from '../../HelperFiles/GlobalStyles';
// import ButtonComponent from '../../Components/ButtonComponent';
// import PagerView from 'react-native-pager-view';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { getAdapter } from 'axios';

// const OnboardingScreen = () => {
//     const navigation = useNavigation<NavigationProp<any>>();
//     const [pageIndex, setPageIndex] = useState(0);

//     const titles = ['Find Trusted Doctors', 'Choose Best Doctors', 'Easy Appointments'];
//     const bgImages = [images.ONBOARD_BG, images.ONBOARD_BG2, images.ONBOARD_BG];

//     return (
//         <>
//             <StatusBar barStyle="dark-content" backgroundColor="transparent" hidden={true} />
//             <PagerView
//                 style={styles.pagerView}
//                 initialPage={0}
//                 onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
//             >
//                 <View key="1" style={styles.fullContainer}>
//                     <ImageBackground source={bgImages[pageIndex]} style={styles.fullContainer}>
//                         <View style={[styles.container, GlobalStyles.containerPadding]}>
//                             <Image source={images.ONBOARD_ONE} style={styles.bgImage} />
//                             <Text style={styles.title}>Find Trusted Doctors</Text>
//                             <Text style={styles.subTitle}>
//                             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.
//                             </Text>
//                         </View>
//                         <View style={styles.bottomContainer}>
//                             <ButtonComponent
//                                 title="Get Started"
//                                 onPress={() => navigation.navigate('BottomTabBarScreen')}
//                                 buttonStyle={GlobalStyles.btnStyle}
//                                 textStyle={styles.btnTitle}
//                             />
//                             <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('BottomTabBarScreen')}>
//                                 <Text style={GlobalStyles.regualarTxt}>Skip</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </ImageBackground>
//                 </View>
//                 <View key="2" style={styles.fullContainer}>
//                     <ImageBackground source={bgImages[pageIndex]} style={styles.fullContainer}>
//                         <View style={[styles.container, GlobalStyles.containerPadding]}>
//                             <Image source={images.ONBOARD_TWO} style={styles.bgImage} />
//                             <Text style={styles.title}>Choose Best Doctors</Text>
//                             <Text style={styles.subTitle}>
//                             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.
//                              </Text>
//                         </View>
//                         <View style={styles.bottomContainer}>
//                                 <ButtonComponent
//                                     title="Get Started"
//                                     onPress={() => navigation.navigate('BottomTabBarScreen')}
//                                     buttonStyle={GlobalStyles.btnStyle}
//                                     textStyle={styles.btnTitle}
//                                 />
//                                 <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('BottomTabBarScreen')}>
//                                     <Text style={GlobalStyles.regualarTxt}>Skip</Text>
//                                 </TouchableOpacity>
//                             </View>
//                     </ImageBackground>
//                 </View>
//                 <View key="3" style={styles.fullContainer}>
//                     <ImageBackground source={bgImages[pageIndex]} style={styles.fullContainer}>
//                         <View style={[styles.container, GlobalStyles.containerPadding]}>
//                             <Image source={images.ONBOARD_THREE} style={styles.bgImage} />
//                             <Text style={styles.title}>Easy Appointments</Text>
//                             <Text style={styles.subTitle}>
//                             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.</Text>
//                         </View>
//                         <View style={styles.bottomContainer}>
//                             <ButtonComponent
//                                 title="Get Started"
//                                 onPress={() => navigation.navigate('BottomTabBarScreen')}
//                                 buttonStyle={GlobalStyles.btnStyle}
//                                 textStyle={styles.btnTitle}
//                             />
//                             <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('BottomTabBarScreen')}>
//                                 <Text style={GlobalStyles.regualarTxt}>Skip</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </ImageBackground>
//                 </View>
//             </PagerView>
//         </>
//     );
// };

// export default OnboardingScreen;
import {Text, ImageBackground, StatusBar, TouchableOpacity, View, Image, Animated 
} from 'react-native';
import React, { useState, useRef } from 'react';
import PagerView from 'react-native-pager-view';
import images from '../../HelperFiles/Images';
import styles from './OnboardingStyle';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import ButtonComponent from '../../Components/ButtonComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [pageIndex, setPageIndex] = useState(0);
    const titles = ['Find Trusted Doctors', 'Choose Best Doctors', 'Easy Appointments'];
    const bgImages = [images.ONBOARD_BG, images.ONBOARD_BG2, images.ONBOARD_BG];

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePageScroll = (e) => {
        const { offset } = e.nativeEvent;
        Animated.timing(fadeAnim, {
            toValue: 1 - offset,
            duration: 100,
            useNativeDriver: true,
        }).start();

        Animated.timing(scaleAnim, {
            toValue: 1 - offset * 0.1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" hidden={true} />
            <PagerView
                style={styles.pagerView}
                initialPage={0}
                onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
                onPageScroll={handlePageScroll}
            >
                {[0, 1, 2].map((index) => (
                    <View key={index} style={styles.fullContainer}>
                        <ImageBackground source={bgImages[index]} style={styles.fullContainer}>
                            <View style={[styles.container, GlobalStyles.containerPadding]}>
                                <Animated.View
                                    style={{ 
                                        opacity:scaleAnim ,
                                        transform: [{ scale: scaleAnim }]
                                    }}
                                >
                                    <Image source={index === 0 ? images.ONBOARD_ONE : index === 1 ? images.ONBOARD_TWO : images.ONBOARD_THREE}
                                        style={styles.bgImage}
                                    />
                                    <Text style={styles.title}>{titles[index]}</Text>
                                    <Text style={styles.subTitle}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    </Text>
                                </Animated.View>
                            </View>
                            <View style={styles.bottomContainer}>
                                <ButtonComponent
                                    title="Get Started"
                                    onPress={() => navigation.navigate('BottomTabBarScreen')}
                                    buttonStyle={GlobalStyles.btnStyle}
                                    textStyle={styles.btnTitle}
                                />
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('BottomTabBarScreen')}>
                                    <Text style={GlobalStyles.regualarTxt}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </PagerView>
        </>
    );
};

export default OnboardingScreen;
