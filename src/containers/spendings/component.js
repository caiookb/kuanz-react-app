import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {
  CustomButton,
  TextInput,
  Spinner,
  CheckBox,
  UpperNav,
  Datepicker,
  Repeat,
  Tag,
  Calculator,
} from '../../common-components';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {Colors} from '../../assets/colors';
import {sendForm} from './controller';
import styles from './styles';
import moment from 'moment';

configLocalCalendar();

const SpendingComponent = props => {
  const {tag, navigation} = props;

  const [name, setName] = useState(undefined);
  const [historic, setHistoric] = useState('0');
  const [value, setValue] = useState(0);
  const [type, setType] = useState(undefined);
  const [paid, setPaid] = useState(undefined);
  const [paidDate, setPaidDate] = useState(moment().format('YYYY-MM-DD'));
  const [repeat, setRepeat] = useState(false);
  const [repeatTimes, setRepeatTimes] = useState(2);
  const [period, setPeriod] = useState('Mensal');
  const [error, setError] = useState('');
  const [fetching, setFetching] = useState(false);

  const form = {name, value, type, paid, paidDate, repeat, repeatTimes, period};
  const handles = {setFetching, setError};
  console.log('VALUE');
  return (
    <View style={styles.container}>
      <UpperNav
        title={'Adicionar uma nova despesa'}
        color={Colors.spending}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <KeyboardAvoidingView
        enabled
        behavior={'height'}
        style={styles.content}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputView}>
          <View style={styles.inputView}>
            <Calculator
              value={value}
              setValue={setValue}
              historic={historic}
              setHistoric={setHistoric}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={name}
            type={'custom'}
            label={'Título'}
            maskOptions={{
              mask: '***********************',
            }}
            maskInputProps={{
              placeholder: '',
              onChangeText: text => setName(text),
            }}
          />
        </View>
        <View style={styles.inputView}>
          <Tag handleState={setType} tagValue={type} tags={tag} />
        </View>
        <View style={styles.doubleView}>
          <Datepicker day={paidDate} setDay={setPaidDate} />
          <CheckBox enable={paid} onPress={setPaid} title={'Pago'} />
          <CheckBox enable={repeat} onPress={setRepeat} title={'Repetir'} />
        </View>
        {repeat ? (
          <View style={styles.inputView}>
            <Repeat
              period={period}
              setPeriod={setPeriod}
              repeatTimes={repeatTimes}
              setRepeatTimes={setRepeatTimes}
            />
          </View>
        ) : null}
      </KeyboardAvoidingView>
      {fetching ? (
        <View>
          <Spinner />
        </View>
      ) : null}
      <CustomButton
        title={'Adicionar despesa'}
        color={Colors.spending}
        onPress={() => {
          console.log('PUCK');
          sendForm(form, handles, navigation);
        }}
      />
    </View>
  );
};

export default SpendingComponent;
