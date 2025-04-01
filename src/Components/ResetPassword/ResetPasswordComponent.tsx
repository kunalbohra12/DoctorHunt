import { View, Modal, Text, Image, TextInput, Pressable, Platform, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import styles from '../ResetPassword/ResetPasswordStyle';
import images from '../../HelperFiles/Images';
import colors from '../../HelperFiles/Colors';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { useNavigation } from '@react-navigation/native';
const ResetPasswordComponent = ({ visible, onClose }: any) => {
    const [isShow, setIsShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={GlobalStyles.gradientBG}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.label}>Reset Password</Text>
                        <Text style={styles.subLabel}>
                            Set the new password for your account so you can login and access all the features.
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput secureTextEntry={isVisible} placeholder="password" placeholderTextColor={colors.VIOLET} style={styles.input} />
                            <Pressable onPress={() => setIsVisible(!isVisible)}>
                                <Image style={styles.btnIcon} source={isVisible ? images.VISIBILITY_OFF : images.SECURE_ICON} />
                            </Pressable>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput secureTextEntry={isShow} placeholder="Re-enter Password" placeholderTextColor={colors.VIOLET} style={styles.input} />
                            <Pressable onPress={() => setIsShow(!isShow)}>
                                <Image style={styles.btnIcon} source={isShow ? images.VISIBILITY_OFF : images.SECURE_ICON} />
                            </Pressable>
                        </View>
                        <ButtonComponent
                            onPress={onClose}
                            title="Update Password"
                            buttonStyle={[GlobalStyles.btnStyle, styles.topMargin]}
                            textStyle={GlobalStyles.btnTxtStyle}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};


export default ResetPasswordComponent;
