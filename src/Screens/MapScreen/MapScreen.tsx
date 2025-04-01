import React, { useEffect, useState } from 'react';
import { View, PermissionsAndroid, Platform, Alert, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './MapScreenStyle';
import Geolocation from '@react-native-community/geolocation';
const CurrentLocationMap = () => {
  // const tokyoRegion = {
  //   latitude:  26.211264,
  //   longitude: 73.023384,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01,
  // };
  // const chibaRegion = {
  //   latitude:  26.22364,
  //   longitude: 73.01654,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01,
  // };
  const [region, setRegion] = useState({
    latitude: 26.211264,
    longitude: 73.023384,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  useEffect(() => {
    requestLocationPermission();
  }, []);
  const [mLat, setMLat] = useState(null);
  const [mLong, setMLong] = useState(null);
  const [location, setLocation] = useState();
  const markers = [
    { id: 1, latitude: 37.78825, longitude: -122.4324, title: 'Marker 1' },
    { id: 2, latitude: 37.78925, longitude: -122.4354, title: 'Marker 2' },
  ];

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ]);
        if (
          granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED ||
          granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Location permission granted');
          return true;
        } else {
          Alert.alert('Permission Denied', 'Location permission is required.');
          return false;
        }
      } catch (err) {
        console.warn('Permission request error:', err);
        return false;
      }
    }
    return true;
  };

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Enable location permissions in settings.');
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        console.log('Current position:', position);
        setMLat(position.coords.latitude);
        setMLong(position.coords.longitude);
      },
      error => {
        console.log('Location error:', error.code, error.message);
        if (error.code === 2) {
          Alert.alert(
            'No Location Provider',
            'Please enable GPS from settings.'
          );
        } else {
          Alert.alert('Error', error.message);
        }
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} initialRegion={tokyoRegion}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
        onRegionChange={x => {
          console.log(x);
        }}
        >
        <Polyline
          coordinates={[tokyoRegion, chibaRegion]}
          strokeColor={"#000"}
          strokeWidth={3}
          lineDashPattern={[1]}
        />
      </MapView>
      <TouchableOpacity
        style={styles.mapAction}
        onPress={getLocation}>
        <Text style={styles.btnTxt}>Get Current Location</Text>
      </TouchableOpacity> */}
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // Use Google Maps (iOS & Android)
          style={styles.container}
          initialRegion={region}
          followsUserLocation={true}
          onRegionChangeComplete={region => setRegion(region)}
        >
          {region && <Marker coordinate={region} title="My Location" />}
          {/* <Polyline
          coordinates={[tokyoRegion, chibaRegion]}
          strokeColor={"#000"}
          strokeWidth={3}
          lineDashPattern={[1]}
        /> */}
        </MapView>
        <TouchableOpacity
          style={styles.mapAction}
          onPress={getLocation}>
          <Text style={styles.btnTxt}>Get Current Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurrentLocationMap;
