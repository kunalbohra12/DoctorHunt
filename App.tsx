/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/Screens/Onboarding/OnboardingScreen';
import BottomTabBarScreen from './src/TabBar/TabNavigator';
import SettingsScreen from './src/Screens/Settings/SettingsScreen';
import FindDoctorScreen from './src/Screens/FindDoctor/FindDoctorScreen';
import SplashScreen from './src/Screens/Splash/SplashScreen';
import LoginScreen from './src/Screens/Login/LoginScreen';
import SignUpScreen from './src/Screens/SignUp/SignUpScreen';
import ForgotPasswordComponent from './src/Components/ForgotPassword/ForgotPasswordComponent';
import ResetPasswordComponent from './src/Components/ResetPassword/ResetPasswordComponent';
import MapScreen from './src/Screens/MapScreen/MapScreen';
import LoaderComponent from './src/Components/Loader/LoaderComponent';
import { RootStackParamList } from './src/navigation/navigationType';
import { BackHandler } from 'react-native';
import DiagonsticsTestScreen from './src/Screens/DiagonsticsTests/DiagonsticsTestScreen';
import LiveChatScreen from './src/Screens/LiveChat/LiveChatScreen';
import ProfileScreen from './src/Screens/Profile/ProfileScreen';
import EditProfileScreen from './src/Screens/EditProfile/EditProfileScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    const backAction = () => true;
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
}, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SignUpScreen" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} component={OnboardingScreen} />
        <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} component={SettingsScreen} />
        <Stack.Screen name="FindDoctorScreen" options={{ headerShown: false }} component={FindDoctorScreen} />
        <Stack.Screen name="BottomTabBarScreen" options={{ headerShown: false }} component={BottomTabBarScreen} />
        <Stack.Screen name="ForgotPasswordComponent" options={{ headerShown: false }} component={ForgotPasswordComponent} />
        <Stack.Screen name="ResetPasswordComponent" options={{ headerShown: false }} component={ResetPasswordComponent} />
        <Stack.Screen name="MapScreen" options={{ headerShown: false }} component={MapScreen} />
        <Stack.Screen name="LoaderComponent" options={{ headerShown: false }} component={LoaderComponent} />
        <Stack.Screen name="DiagonsticsTestScreen" options={{ headerShown: false }} component={DiagonsticsTestScreen} />
        <Stack.Screen name="LiveChatScreen" options={{ headerShown: false }} component={LiveChatScreen} />
        <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" options={{ headerShown: false }} component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
