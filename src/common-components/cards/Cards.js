import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {food, transport, lazer} from '../../assets/images';
import moment from 'moment';
import {Colors} from '../../assets/colors';

const handleDate = date => {
  return moment(date).format('DD/MM');
};

const handleDay = date => {
  return moment(date).format('dddd');
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

const handlePaidOrReceived = helper => {
  const {type, value} = helper;
  switch (type) {
    case 'paid':
      return value ? 'Pago' : 'Não pago';
    case 'received':
      return value ? 'Recebido' : 'Não recebido';
  }
};

const Cards = props => {
  const {transaction, onPress, title} = props;
  const paidOrReceivedHelper = {
    value: transaction.paid || transaction.received,
    type: transaction.paid ? 'paid' : 'received',
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.view}>
      <View style={styles.card}>
        <Image style={styles.image} source={handleImage(transaction.type)} />
        <View style={styles.textAndDate}>
          <Text style={styles.text}>{transaction.name}</Text>
          <View style={styles.paidAndStatus}>
            <Text style={[styles.text, styles.dateText]}>
              {handlePaidOrReceived(paidOrReceivedHelper)}
            </Text>
          </View>
        </View>
        <View style={styles.valueView}>
          <Text
            style={[
              styles.value,
              {
                color: transaction.receiveDate
                  ? Colors.textIncome
                  : Colors.textSpending,
              },
            ]}>
            R${parseFloat(transaction.value).toFixed(2)}
          </Text>
          <Text style={[styles.text, styles.statusText]}>
            {handlePaidOrReceived(paidOrReceivedHelper)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
