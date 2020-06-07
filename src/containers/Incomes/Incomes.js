import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {View, KeyboardAvoidingView, Alert, Text} from 'react-native';
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
  Calculator,
} from '../../common-components';
import {Colors} from '../../assets/colors';
import {sendForm} from './controller';
import styles from './styles';
import moment from 'moment';
configLocalCalendar();

const Incomes = props => {
  const {tag, navigation, route} = props;
  const editing = route && route.params && route.params.editing;
  const each = route && route.params && route.params.each;

  const [name, setName] = useState(editing ? each.name : '');
  const [value, setValue] = useState(editing ? each.value : 0);
  const [historic, setHistoric] = useState(editing ? each.value : 0);
  const [type, setType] = useState(editing ? each.type : 'Alimentação');
  const [received, setReceived] = useState(editing ? each.received : false);
  const [repeat, setRepeat] = useState(false);
  const [repeatTimes, setRepeatTimes] = useState(2);
  const [period, setPeriod] = useState('Mensal');
  const [installmentType, setInstallmentType] = useState('');
  const [error, setError] = useState('');
  const [fetching, setFetching] = useState(false);
  const [receiveDate, setReceivedDate] = useState(
    editing ? each.receiveDate : moment().format('YYYY-MM-DD'),
  );

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

  const editingForm = {
    ...form,
    income_id: each._id,
    installmentId: each?.installmentId,
  };

  const alertButtons = (editing, type) => {
    console.log(type);
    Alert.alert(
      type
        ? 'Como deseja apagar a transação?'
        : 'Como deseja alterar a transação?',
      type
        ? 'Escolha alguma maneira para deletar'
        : 'Escolha alguma maneira para alterar',
      [
        {
          text: 'Atual',
          onPress: () =>
            sendForm(editingForm, handles, navigation, editing, 'ACTUAL', type),
        },
        {
          text: 'Atual e próximas',
          onPress: () =>
            sendForm(
              editingForm,
              handles,
              navigation,
              editing,
              'ACTUAL_AND_NEXTS',
              type,
            ),
        },
        {
          text: 'Todas',
          onPress: () =>
            sendForm(editingForm, handles, navigation, editing, 'EVERY', type),
        },
      ],
      {cancelable: true},
    );
  };

  const handles = {setError, setFetching};

  return (
    <View style={styles.container}>
      <UpperNav
        title={editing ? 'Atualizar a receita' : 'Adicionar uma nova receita'}
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
          <Calculator
            status={editing}
            value={value}
            setValue={setValue}
            historic={historic}
            setHistoric={setHistoric}
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
        <View style={editing ? styles.inputView : styles.doubleView}>
          <Datepicker day={receiveDate} setDay={setReceivedDate} />

          {editing ? null : (
            <React.Fragment>
              <CheckBox
                enable={received}
                onPress={setReceived}
                title={'Recebido'}
              />
              <CheckBox enable={repeat} onPress={setRepeat} title={'Repetir'} />
            </React.Fragment>
          )}
        </View>

        <View style={styles.inputView} />
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

      {editing ? (
        <CustomButton
          title={'Apagar receita'}
          color={Colors.spending}
          onPress={() => {
            alertButtons(false, true);
          }}
          type={'single'}
        />
      ) : null}

      <CustomButton
        title={editing ? 'Atualizar receita' : 'Adicionar receita'}
        color={Colors.income}
        onPress={() => {
          editing
            ? alertButtons(editing, false)
            : sendForm(form, handles, navigation, editing);
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
  fetchTags: () => TagsController.getAllTags(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Incomes),
);
