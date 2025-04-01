import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import styles from './ButtonComponentStyle';

const ButtonComponent = ({ title, onPress, buttonStyle, textStyle }:any) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
