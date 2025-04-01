import React from 'react';
import { View, Modal } from 'react-native';
import {   BallIndicator} from 'react-native-indicators';
import styles from './LoaderComponentStyle';
import colors from '../../HelperFiles/Colors'
const LoaderComponent = ({ visible }:any) => {
    return (
        <Modal transparent={true} animationType="fade" visible={visible}>
            <View style={styles.container}>
                <BallIndicator color={colors.LIGHT_GREEN} size={60} />
            </View>
        </Modal>
    );
};

export default LoaderComponent;
