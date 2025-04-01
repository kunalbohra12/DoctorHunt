import { View, Text, ImageBackground, Image, TextInput, Pressable, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import styles from './LoginscreenStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
import ButtonComponent from '../../Components/ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ForgotPasswordComponent from '../../Components/ForgotPassword/ForgotPasswordComponent';
import ResetPasswordComponent from '../../Components/ResetPassword/ResetPasswordComponent';
import { LoginRequest } from '../../HelperFiles/api/AuthApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderComponent from '../../Components/Loader/LoaderComponent';
const LoginScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<any>>();
    const [isForgotModalVisible, setIsForgotModalVisible] = useState(false);
    const [isResetModalVisible, setIsResetModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handleModalVisibility = () => {
        setIsForgotModalVisible(false);
        setIsResetModalVisible(true);
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Message', 'Email and Password are required');
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Invalid email format');
            return;
        }
        setLoading(false);
        try {
            const response = await LoginRequest({
                email: email, password: password,
            });
            if (response.data != null) {
                console.log('email is', email);
                console.log('password is', password);
                if (response.success) {
                    setLoading(false);
                    navigation.navigate('BottomTabBarScreen');
                    console.log('Login Success:', response);
                    await AsyncStorage.setItem('userToken', response.data?.token);
                } else {
                    console.log('Login Data MisMatched:', response);
                }
            } else {
                console.log('Login Failed', response.message);
                Alert.alert('Login Failed', response.message);
            }
        } catch (error) {
            console.error('Login Failed:', error);
        }
    };
    return (
        <KeyboardAvoidingView
            style={GlobalStyles.gradientBG}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.TRANSPARENT}
                hidden={true}
            />
            <ImageBackground source={images.GRADIENT_BG} style={styles.container}>
                    <LoaderComponent visible={loading} />
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Welcome back</Text>
                        <Text style={styles.subTitle}>You can search course, apply course and find
                            scholarship for abroad studies</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.btnStyle}>
                            <Image source={images.GOOGLE_ICON} style={styles.btnIcon} />
                            <Text style={styles.btnTitle}>Google</Text>
                        </View>
                        <View style={styles.btnStyle}>
                            <Image source={images.FACEBOOK_ICON} style={styles.btnIcon} />
                            <Text style={styles.btnTitle}>Facebook</Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={colors.VIOLET}
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            secureTextEntry={isVisible}
                            placeholder="Password"
                            placeholderTextColor={colors.VIOLET}
                            style={styles.input}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Pressable onPress={() => setIsVisible(!isVisible)}>
                            <Image style={styles.icon} source={isVisible ? images.VISIBILITY_OFF : images.VISIBILITY_OFF} />
                        </Pressable>
                    </View>
                    <View style={styles.bottomBtnContainer}>
                        <ButtonComponent
                            onPress={handleLogin}
                            title="Login"
                            buttonStyle={GlobalStyles.btnStyle}
                            textStyle={GlobalStyles.btnTxtStyle}
                        />
                    </View>
                    <TouchableOpacity onPress={() => setIsForgotModalVisible(true)}>
                        <Text style={styles.highlightTxt}>Forgot password</Text>
                    </TouchableOpacity>
                    <ForgotPasswordComponent
                        visible={isForgotModalVisible}
                        onClose={() => setIsForgotModalVisible(false)}
                        onContinue={handleModalVisibility}
                    />
                    <ResetPasswordComponent
                        visible={isResetModalVisible}
                        onClose={() => setIsResetModalVisible(false)}
                    />
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomTxt}>Don’t have an account? </Text>
                        <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.mediumTxt}>Join us</Text>
                        </Pressable>
                    </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};
export default LoginScreen;
