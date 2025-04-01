import { View, Modal, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import styles from '../ForgotPassword/ForgotPasswordStyle';
import colors from '../../HelperFiles/Colors';
import ButtonComponent from '../ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
const ForgotPasswordComponent = ({ visible, onClose, onContinue }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={GlobalStyles.gradientBG}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.label}>Forgot Password</Text>
          <Text style={styles.subLabel}>
            Enter your email for the verification process, we will send a 4-digit code to your email.
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email"
              placeholderTextColor={colors.VIOLET}
              style={styles.input}
            />
          </View>
          <ButtonComponent
            onPress={onContinue}
            title="Continue"
            buttonStyle={GlobalStyles.btnStyle}
            textStyle={GlobalStyles.btnTxtStyle}
          />
        </View>
      </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default ForgotPasswordComponent;
