import React, {Component, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {Colors} from '../../assets/colors';

export const configLocalCalendar = () => {
  LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  };

  LocaleConfig.defaultLocale = 'br';
};

const CalendarComponent = props => {
  const {day, handleDaySelected} = props;
  let markedDay = {[day]: {selected: true, selectedColor: Colors.income}};

  return (
    <View>
      <Calendar
        onDayPress={day => {
          handleDaySelected(day.dateString);
        }}
        markedDates={markedDay}
      />
    </View>
  );
};

export default CalendarComponent;
