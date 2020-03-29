import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomButton = props => {
  const {width, height, color, onPress, onLongPress, disabled, title} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonsConfirm, {backgroundColor: color}]}>
      <Text style={styles.buttonsText}> {title} </Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  width: '75%',
  height: 35,
  rounded: false,
  color: '#0F70B8',
  onPress: () => {},
  onLongPress: () => {},
  style: {},
  raised: true,
  disabled: false,
  children: null,
};

export default CustomButton;
