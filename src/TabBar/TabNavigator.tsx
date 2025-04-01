/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
// import OnboardingScreen from '../Screens/Onboarding/OnboardingScreen';
import images from '../HelperFiles/Images';
import { Image, View } from 'react-native';
import FavouriteScreen from '../Screens/Favourite/FavouriteScreen';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import colors from '../HelperFiles/Colors';
import TestScreen from '../Screens/Tests/TestScreen';
import { Platform } from 'react-native';
// import images from '../HelperFiles/Images';
const Tab = createBottomTabNavigator();

const BottomTabBarScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconSource;
                    let iconSize = { width: 24, height: 24 };
                    if (route.name === 'Home') {
                        iconSource = images.HOME_ICON;
                        iconSize =  focused ? { width: 20, height: 19 } : {width: 20, height: 19};
                    } else if (route.name === 'Onboard') {
                        iconSource = images.LIKE_ICON;
                        iconSize =  focused ? { width: 22, height: 19 } : {width: 22, height: 19};
                    } else if (route.name === 'Favourite') {
                        iconSource = images.READ_ICON;
                        iconSize =  focused ? { width: 20, height: 19 } : {width: 26, height: 20};
                    } else if (route.name === 'Chat') {
                        iconSource =  images.CHAT_ICON;
                        iconSize = focused ? { width: 20, height: 19 } : {width: 21, height: 19};
                    }
                    return (
                        focused ?
                            <View style={{ alignItems:'center',justifyContent:'center', backgroundColor: colors.LIGHT_GREEN, borderRadius: 50, height: 48, width: 48 }}>
                                <Image source={iconSource} tintColor={colors.DEFAULT_WHITE} style={iconSize} />
                            </View>
                            :
                            <Image source={iconSource} style={iconSize} />

                    );
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                // tabBarActiveTintColor: '#F75D37',
                // tabBarInactiveTintColor: '#9D9D9D',
                tabBarStyle: {
                    elevation: 0,
                    position: 'absolute',
                    borderColor: 'white',
                    borderTopWidth: 0,
                    height: Platform.OS === 'ios' ? 100 : 70,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    marginVertical: 20,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Onboard" component={FavouriteScreen} />
            <Tab.Screen name="Favourite" component={TestScreen} />
            <Tab.Screen name="Chat" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabBarScreen;
