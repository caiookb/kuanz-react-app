import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from 'react-native';
import {arrow, profile} from '../../assets/images';
import {CustomButton} from '../';
import styles from './styles';
import moment from 'moment';
import {Colors} from '../../assets/colors';

const Monthpicker = props => {
  const {enabled, handleMonthModal, date, handleDate} = props;
  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity
        onPress={() => {
          handleDate(null, 'monthArrowSub');
        }}>
        <Image source={arrow} style={styles.rotateArrow} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleMonthModal();
        }}>
        <Text style={styles.label}>{moment(date).format('MMMM')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleDate(null, 'monthArrowAdd');
        }}>
        <Image source={arrow} />
      </TouchableOpacity>
      {enabled ? (
        <MonthModal
          handleDate={handleDate}
          handleMonthModal={handleMonthModal}
          date={date}
        />
      ) : null}
    </View>
  );
};

const HandleMonth = props => {
  const {month, handleDate} = props;
  return monthNames.map(m => (
    <View style={styles.monthContainer}>
      <Text
        style={
          month === m.value
            ? [styles.monthText, styles.monthSelected]
            : styles.monthText
        }
        onPress={() => {
          handleDate(m.value, 'selectMonth');
        }}>
        {m.name.toUpperCase()}
      </Text>
    </View>
  ));
};

const HandleYears = props => {
  const {year, handleDate} = props;
  return (
    <View style={styles.yearView}>
      <TouchableOpacity
        onPress={() => {
          handleDate(null, 'yearSub');
        }}>
        <Image source={arrow} style={styles.rotateArrow} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.yearText}>{year}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleDate(null, 'yearAdd');
        }}>
        <Image source={arrow} />
      </TouchableOpacity>
    </View>
  );
};

const MonthModal = props => {
  const {enabled, handleMonthModal, date, handleDate} = props;
  const month = moment(date).month();
  const year = moment(date).format('YYYY');
  return (
    <Modal
      transparent={true}
      visible={enabled}
      onRequestClose={() => {
        handleMonthModal();
      }}>
      <TouchableOpacity
        onPress={() => handleMonthModal()}
        style={styles.centeredView}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <HandleYears handleDate={handleDate} year={year} />
            <View style={styles.monthView}>
              <HandleMonth handleDate={handleDate} month={month} />
            </View>
            <View style={styles.button}>
              <CustomButton
                color={Colors.primary}
                title={'Confirmar'}
                onPress={() => handleMonthModal()}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const monthNames = [
  {value: 0, name: 'Jan'},
  {value: 1, name: 'Fev'},
  {value: 2, name: 'Mar'},
  {value: 3, name: 'Abr'},
  {value: 4, name: 'Mai'},
  {value: 5, name: 'Jun'},
  {value: 6, name: 'Jul'},
  {value: 7, name: 'Ago'},
  {value: 8, name: 'Set'},
  {value: 9, name: 'Out'},
  {value: 10, name: 'Nov'},
  {value: 11, name: 'Dez'},
];

export default Monthpicker;
