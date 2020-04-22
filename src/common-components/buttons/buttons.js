import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Colors} from '../../assets/colors';

export const CustomButton = props => {
  const {color, onPress, title, type} = props;
  return (
    <View style={[styles.button]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.roundedButton,
          {backgroundColor: color},
          type === 'single' ? {marginBottom: 15} : null,
        ]}>
        <Text style={styles.buttonsText}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export const IconButton = props => {
  const {title, icon, color, onPress, type} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.IconButton,
        {backgroundColor: color},
        type === 'spendings' ? styles.IconButtonSpending : null,
      ]}>
      <Image
        style={type === 'spendings' ? styles.rotateIconSpending : null}
        source={icon}
      />
      <Text style={styles.IconButtonText}> {title} </Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  width: '75%',
  height: 35,
  rounded: false,
  onPress: () => {},
  onLongPress: () => {},
  style: {},
  raised: true,
  disabled: false,
  children: null,
};
