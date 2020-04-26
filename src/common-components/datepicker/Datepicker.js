import React, {Component, version} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import {calendar} from '../../assets/images';
import styles from './styles';
import CalendarComponent from '../../common-components/calendar/Calendar';
import {CustomButton} from '../../common-components';
import {Colors} from '../../assets/colors';

const convertDay = day => {
  const year = day.slice(0, 4);
  const month = day.slice(5, 7);
  const dayD = day.slice(8, 10);
  const converted = dayD + '/' + month + '/' + year;
  return converted;
};

const Datepicker = props => {
  const {toggle, enabled, day, setDay, type} = props;
  return (
    <React.Fragment>
      <View style={styles.datepicker}>
        <Text style={styles.label}>{`Data`}</Text>
        <View style={styles.content}>
          <View style={styles.image}>
            <Image source={calendar} />
          </View>
          <TouchableOpacity
            style={styles.image}
            onPress={() => {
              toggle('toggleCalendar', true);
            }}>
            <Text style={styles.label}>{convertDay(day)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={enabled}
        onRequestClose={() => {
          toggle('toggleCalendar', false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.itens}>
            <CalendarComponent
              day={day}
              handleDaySelected={setDay}
              type={type}
            />
          </View>

          <View style={styles.itens}>
            <CustomButton
              color={Colors.fifth}
              title={'Confirmar'}
              onPress={() => {
                toggle('toggleCalendar', false);
              }}
            />
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default Datepicker;
