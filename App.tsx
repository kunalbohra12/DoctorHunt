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
import SelectTimeScreen from './src/Screens/SelectTime/SelectTimeScreen';
// import AppointmentScreen from './src/Screens/Appointment/AppointmentScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    const backAction = () => true;
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
}, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUpScreen"  component={SignUpScreen} />
        <Stack.Screen name="LoginScreen"  component={LoginScreen} />
        <Stack.Screen name="SplashScreen"  component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen"  component={OnboardingScreen} />
        <Stack.Screen name="SettingsScreen"  component={SettingsScreen} />
        <Stack.Screen name="FindDoctorScreen"  component={FindDoctorScreen} />
        <Stack.Screen name="BottomTabBarScreen" component={BottomTabBarScreen} />
        <Stack.Screen name="ForgotPasswordComponent" component={ForgotPasswordComponent} />
        <Stack.Screen name="ResetPasswordComponent" component={ResetPasswordComponent} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="LoaderComponent" component={LoaderComponent} />
        <Stack.Screen name="DiagonsticsTestScreen" component={DiagonsticsTestScreen} />
        <Stack.Screen name="LiveChatScreen" component={LiveChatScreen} />
        <Stack.Screen name="ProfileScreen"  component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="SelectTimeScreen" component={SelectTimeScreen }/>
        {/* <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
