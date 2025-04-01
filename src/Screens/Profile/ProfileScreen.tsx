import { View, ImageBackground, TouchableOpacity, Image, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import images from '../../HelperFiles/Images';
import styles from './ProfileStyle';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const ProfileScreen = ({ route }:any) => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    mobile: '123-456-7890',
    DOB: '18-10-1978',
    Location: '123-456-7890',
});
const [locationData,setLocationData] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  useEffect(() => {
    if (route.params?.updatedField && route.params?.updatedValue) {
        setUserDetails(prev => ({
            ...prev,
            [route.params.updatedField]: route.params.updatedValue
        }));
    }
}, [route.params]);
  const handleImagePicker = () => {
    Alert.alert(
      'Choose Option',
      'Pick an image from:',
      [
        {
          text: 'Gallery',
          onPress: () => pickImageFromGallery(),
        },
        {
          text: 'Camera',
          onPress: () => takePhotoFromCamera(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };
  const pickImageFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.8,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
          Alert.alert('Error', 'Failed to pick image from gallery');
        } else if (response.assets && response.assets[0].uri) {
          setProfileImage(response.assets[0].uri);
        }
      }
    );
  };
  const takePhotoFromCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.8,
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.error) {
          console.log('Camera Error: ', response.error);
          Alert.alert('Error', 'Failed to take photo');
        } else if (response.assets && response.assets[0].uri) {
          setProfileImage(response.assets[0].uri);
        }
      }
    );
  };
  return (
    <ImageBackground source={images.GRADIENT_BG} resizeMode="cover" style={styles.container}>
      {/* <SafeAreaView style={[GlobalStyles.safeAreaBg]}> */}
      <View style={styles.subContainer}>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.navigateBtnContainer} onPress={() => navigation.goBack()}>
              <Image source={images.BACK_ICON} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Set up your profile</Text>
            <Text style={styles.subTitle} numberOfLines={2}>Update your profile to connect your doctor with
              better impression.</Text>
            <View style={styles.imgContainer}>
              <Image source={profileImage ? { uri: profileImage } : images.USER} style={styles.coverImg} />
              <TouchableOpacity onPress={handleImagePicker}>
                <Image source={images.CAMERA_ICON} style={styles.coverImage} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
       <View style={styles.detailsContainer}>
          <Text style={styles.boldTxt}>Personal Information</Text>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.highlightTitle}>Name</Text>
            <View style={styles.setSpacing}>
              <Text style={styles.inputTitle}>{userDetails.name}</Text>
            <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditProfileScreen',{ field: 'name', value: userDetails.name })}>
              <Image source={images.EDIT_ICON} style={styles.editBtn}/>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.highlightTitle}>Mobile Number</Text>
            <View style={styles.setSpacing}>
              <Text style={styles.inputTitle}>+{userDetails.mobile}</Text>
            <TouchableOpacity style={styles.editBtn}  onPress={() => navigation.navigate('EditProfileScreen',{ field: 'mobile', value: userDetails.mobile })}>
              <Image source={images.EDIT_ICON} style={styles.editBtn}/>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.highlightTitle}>Date of Birth</Text>
            <View style={styles.setSpacing}>
              <Text style={styles.inputTitle}>{userDetails.DOB}</Text>
            <TouchableOpacity style={styles.editBtn}  onPress={() => navigation.navigate('EditProfileScreen',{ field: 'DOB', value: userDetails.D0B })}>
              <Image source={images.EDIT_ICON} style={styles.editBtn}/>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.highlightTitle}>Location</Text>
            <View style={styles.setSpacing}>
              <Text style={styles.inputTitle}>{userDetails.Location}</Text>
            <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditProfileScreen',{ field: 'Location', value: userDetails.Location })}>
              <Image source={images.EDIT_ICON} style={styles.editBtn}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </ImageBackground>


  );
};
export default ProfileScreen;
