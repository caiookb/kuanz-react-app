import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {View, KeyboardAvoidingView} from 'react-native';
import {IncomesController, TagsController} from '../../libs/controllers';
import {
  CustomButton,
  TextInput,
  Spinner,
  CheckBox,
  UpperNav,
  Datepicker,
  Repeat,
  Tag,
} from '../../common-components';
import {Colors} from '../../assets/colors';
import {sendForm} from './controller';
import styles from './styles';
import moment from 'moment';
configLocalCalendar();

const Incomes = props => {
  const {fetchTags} = props;
  const {tag, navigation} = props;
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('Alimentação');
  const [received, setReceived] = useState(false);
  const [receiveDate, setReceivedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [repeat, setRepeat] = useState(false);
  const [repeatTimes, setRepeatTimes] = useState(2);
  const [period, setPeriod] = useState('Mensal');
  const [error, setError] = useState('');
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const {fetchTags} = props;
    fetchTags();
  }, []);

  const form = {
    name,
    value,
    type,
    received,
    receiveDate,
    repeat,
    repeatTimes,
    period,
  };
  const handles = {setError, setFetching};

  return (
    <View style={styles.container}>
      <UpperNav
        title={'Adicionar uma nova receita'}
        color={Colors.income}
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
          <TextInput
            value={value}
            type={'money'}
            label={'Valor da receita'}
            maskInputProps={{
              placeholder: '',
              onChangeText: text => setValue(text),
            }}
            typeOf={'value'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={name}
            type={'custom'}
            label={'Título'}
            maskOptions={{
              mask: '************',
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
          <Datepicker day={receiveDate} setDay={setReceivedDate} />
          <CheckBox
            enable={received}
            onPress={setReceived}
            title={'Recebido'}
          />
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
        title={'Adicionar receita'}
        color={Colors.income}
        onPress={() => {
          sendForm(form, handles, navigation);
        }}
        type={'single'}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {tag} = state;
  return {tag};
};

const mapDispatchToProps = dispatch => ({
  createIncome: data => IncomesController.createIncome(dispatch, data),
  fetchTags: () => TagsController.getAllTags(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Incomes),
);
