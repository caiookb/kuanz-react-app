import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import {Colors} from '../../assets/colors';

export const CalendarModal = props => {
  const {color, onPress, title, type} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <Text>asdasd</Text>
    </Modal>
  );
};
