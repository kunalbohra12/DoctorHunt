import { View, Text, ImageBackground, Image, Alert, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import images from '../../HelperFiles/Images';
import styles from './SignUpScreenStyle';
import ButtonComponent from '../../Components/ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SignUpRequest } from '../../HelperFiles/api/AuthApiService';
import LoaderComponent from '../../Components/Loader/LoaderComponent';
import OtpComponent from '../../Components/OtpComponent/OtpComponent';

const SignUpScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [visible, setIsVisible] = useState(false);


    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleRegister = async () => {
        if (!email || !password) {
            Alert.alert('Message', 'Email and Password are required');
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Invalid email format');
            return;
        } setLoading(true);
        try {
            const response = await SignUpRequest({
                email: email.trim(), password: password,
            });
            if (response.data || response.success) {
                console.log(email);
                console.log(password);
                setLoading(false);
                console.log('User Register Successfully:', response);
                setIsVisible(true);
            } else {
                console.log('SignUp Failed:', response?.message || 'No data received');
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.error('SignUp process Failed:', error);
        }
    };
    return (
        <ImageBackground source={images.GRADIENT_BG} resizeMode="cover" style={styles.container}>
        <SafeAreaView style={[GlobalStyles.gradientBG]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={GlobalStyles.gradientBG}>
                <ScrollView style={GlobalStyles.gradientBG}>
                        <LoaderComponent visible={loading} />
                        <View style={styles.topContainer}>
                            <Text style={styles.title}>Join us to start searching</Text>
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
                            <TextInput placeholder="name" placeholderTextColor={colors.VIOLET} style={styles.input} />
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
                                secureTextEntry={isShow}
                                placeholder="Password"
                                placeholderTextColor={colors.VIOLET}
                                style={styles.input}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <Pressable onPress={() => setIsShow(!isShow)}>
                                <Image style={styles.icon} source={isShow ? images.VISIBILITY_OFF : images.VISIBILITY_OFF} />
                            </Pressable>
                        </View>
                        <View style={styles.btnContainer}>
                            <ButtonComponent
                                onPress={handleRegister}
                                title="Sign Up"
                                buttonStyle={GlobalStyles.btnStyle}
                                textStyle={GlobalStyles.btnTxtStyle}
                            />
                        </View>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.bottomTxt}>Have an account?</Text>
                            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={styles.highlightTxt}>Log In</Text>
                            </Pressable>
                        </View>
                        <OtpComponent isVisible={visible} email={email} password={password} />
                </ScrollView>
            </KeyboardAvoidingView>
       </SafeAreaView>
       </ImageBackground>
    );
};

export default SignUpScreen;
