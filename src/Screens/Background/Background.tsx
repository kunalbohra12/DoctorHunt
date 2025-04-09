import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import styles from './BackgroundStyle';
import GlobalStyles from '../../HelperFiles/GlobalStyles';
import colors from '../../HelperFiles/Colors';

const Background = () => {
  return (
    <ImageBackground style={GlobalStyles.gradientBG}>
        <SafeAreaView style={styles.safeAreaBg}/>
        <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.LIGHT_GREEN}
            hidden={false} />
    </ImageBackground>
  );
};

export default Background;
