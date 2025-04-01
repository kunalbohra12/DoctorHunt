import { View, Modal, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './OtpComponentStyle';
import ButtonComponent from '../ButtonComponent';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import { VerifyOtp } from '../../HelperFiles/api/AuthApiService';
import { OtpInput } from 'react-native-otp-entry';
import colors from '../../HelperFiles/Colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const OtpComponent = ({ isVisible, email, password }: any) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [otp, setOtp] = useState('');
  const otpVerify = async () => {
    try {
      const response = await VerifyOtp({ email: email, otp: otp, password: password });
      if (response.data || response.success) {
        console.log('otp Response', response);
        navigation.navigate('BottomTabBarScreen');
      } else {
        console.log('Otp not Verified', response);
      }
    } catch (error) {
      console.error('Verify Otp Failed:', error);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}>
      {/* <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}> */}
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.label}>Enter 4 Digits Code</Text>
            <Text style={styles.subLabel}>
              Enter the 4 digits code that you received on
              your email.
            </Text>
            <View style={styles.inputContainer}>
              <OtpInput
                numberOfDigits={4}
                autoFocus={false}
                focusColor={colors.LIGHT_GREEN}
                onTextChange={(text) => {
                  console.log('OTP Entered:', text);
                  setOtp(text);
                }}
                theme={{
                  pinCodeContainerStyle: styles.pincodeContainer,
                }}
              />
            </View>
            <ButtonComponent
              onPress={otpVerify}
              title="Continue"
              buttonStyle={GlobalStyles.btnStyle}
              textStyle={GlobalStyles.btnTxtStyle}
            />
          </View>
        </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};
export default OtpComponent;
