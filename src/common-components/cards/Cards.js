import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {food, transport, lazer} from '../../assets/images';
import moment from 'moment';
import {Colors} from '../../assets/colors';

const handleDate = date => {
  return moment(date).format('DD/MM');
};

const handleImage = type => {
  switch (type) {
    case 'Lazer':
      return lazer;
    case 'Alimentação':
      return food;
    case 'Transporte':
      return transport;
    default:
      return transport;
  }
};

const Cards = props => {
  const {transaction, onPress, title} = props;
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={handleImage(transaction.type)} />
      <View style={styles.textAndDate}>
        <Text style={styles.text}>{transaction.name}</Text>
        <Text style={[styles.text, styles.dateText]}>
          {handleDate(transaction.paidDate || transaction.receiveDate)}
        </Text>
      </View>
      <View style={styles.valueView}>
        <Text
          style={[
            styles.value,
            {color: transaction.receiveDate ? Colors.income : Colors.spending},
          ]}>
          R${parseFloat(transaction.value).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default Cards;
