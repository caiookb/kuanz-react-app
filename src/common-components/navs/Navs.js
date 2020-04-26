import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Colors} from '../../assets/colors';
import {goBackWhite} from '../../assets/images';

export const UpperNav = props => {
  const {onPress, title, color, icon} = props;
  return (
    <View style={[styles.nav, {backgroundColor: color}]}>
      <TouchableOpacity style={styles.goBack} onPress={onPress}>
        <Image source={goBackWhite} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

UpperNav.defaultProps = {
  onPress: () => {},
  title: 'Voltar',
  color: Colors.income,
  icon: goBackWhite,
};
