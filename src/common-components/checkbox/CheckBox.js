import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {toggleOff, toggleOn} from '../../assets/images';

const CheckBox = props => {
  const {enable, onPress, title} = props;
  return (
    <View style={styles.toggle}>
      <Text style={styles.CheckBoxTitle}> {title} </Text>
      <TouchableOpacity
        onPress={() => (enable ? onPress(false) : onPress(true))}>
        <Image source={enable ? toggleOn : toggleOff} />
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
