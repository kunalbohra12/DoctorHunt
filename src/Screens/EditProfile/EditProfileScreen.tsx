import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native';
import styles from './EditProfileStyle';
import { TouchableOpacity } from 'react-native';
import images from '../../HelperFiles/Images';
import { useNavigation } from '@react-navigation/native';
import colors from '../../HelperFiles/Colors';
import { Country, State, City } from 'country-state-city';
const EditProfileScreen = ({ route }: any) => {
    const navigation = useNavigation();
    const { title, placeholderTxt } = route.params;
    const { field, value } = route.params;
    const [updatedValue, setUpdatedValue] = useState(value);
    const handleGoBack = () => {
        navigation.setParams({ updatedField: field, updatedValue });
        navigation.goBack();
    };
    console.log(Country.getAllCountries());
    console.log(State.getStatesOfCountry('IN'));
    console.log(City.getCitiesOfState('IN', 'MH'));
    return (
        <SafeAreaView style={styles.safeAreaBG}>
            <StatusBar
                animated={true}
                backgroundColor={colors.DEFAULT_WHITE}
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden}
            />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.navigateBtnContainer} onPress={handleGoBack}>
                        <Image source={images.BACK_ICON} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.inputTitle}>What is your {field}?</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setUpdatedValue(text)}
                        value={updatedValue}
                        placeholder={placeholderTxt}
                        placeholderTextColor={colors.LIGHT_VIOLET}
                    />
                </View>
                <View style={styles.horizontalLine} />
            </View>
        </SafeAreaView>
    );
};
export default EditProfileScreen;
