import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './BgAnimationComponentStyle';

const BgAnimationComponent = () => {
    return (
        <View style={styles.container}>
            <LottieView
                style={[styles.lottie]}
                source={require('../../assets/json/Loader.json')}
                autoPlay
                loop={true}
                resizeMode={'cover'}
            />
        </View>
    );
};
export default BgAnimationComponent;
