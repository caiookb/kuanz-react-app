import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  CustomButton,
  TextInput,
  Spinner,
  CheckBox,
  UpperNav,
  CalendarModal,
  Datepicker,
  Repeat,
} from '../../common-components';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {Colors} from '../../assets/colors';
import {SpendingsController} from '../../libs/controllers';
import styles from './styles';
import moment from 'moment';

configLocalCalendar();

class Spendings extends Component {
  state = {
    name: undefined,
    value: 0,
    type: undefined,
    paid: false,
    paidDate: moment().format('YYYY-MM-DD'),
    repeat: false,
    repeatTimes: 0,
    period: 'Semanal',
    error: '',
    fetching: false,
    toggleCalendar: false,
    togglePeriod: false,
  };

  isFormValid = async () => {
    const {
      name,
      value,
      type,
      paid,
      paidDate,
      repeat,
      repeatTimes,
      period,
    } = this.state;
    if (!name && !value && !type && !paid && !paidDate) {
      this.setState({error: 'Preencha todos os campos!'});
      return false;
    } else {
      this.setState({formValid: true, fetching: true});
      const spending = {
        name,
        value: this.handleValue(),
        type,
        paid,
        paidDate,
      };

      const spendingRepeat = {...spending, repeat: repeatTimes, period};
      this.setState({fetching: true});
      return repeat ? spendingRepeat : spending;
    }
  };

  sendForm = async () => {
    const {history, createSpending} = this.props;
    const spending = await this.isFormValid();
    const req = await createSpending(spending);
    console.log('REQ', req);
    if (!req.error) {
      history.push('/dashboard');
    } else {
      setTimeout(() => {
        this.setState({error: req.error, fetching: false});
      }, 2000);
    }
  };

  handleValue = () => {
    const {value} = this.state;
    console.log('value', value);
    const cleanValue = value
      .split('.')
      .join('')
      .replace(',', '.');
    return parseFloat(cleanValue && cleanValue.replace('R$', ''));
  };

  handleState = (type, value) => {
    const {repeatTimes, repeat, paid} = this.state;
    switch (type) {
      case 'day':
        this.setState({paidDate: value});
        break;
      case 'toggleCalendar':
        this.setState({toggleCalendar: value});
        break;
      case 'togglePeriod':
        this.setState({togglePeriod: value});
        break;
      case 'period':
        this.setState({period: value, togglePeriod: false});
        break;
      case 'sum':
        this.setState({repeatTimes: repeatTimes + 1});
        break;
      case 'name':
        this.setState({name: value});
        break;
      case 'value':
        this.setState({value: value});
        break;
      case 'type':
        this.setState({type: value});
        break;
      case 'repeat':
        this.setState({repeat: !repeat ? true : false, repeatTimes: 2});
        break;
      case 'paid':
        this.setState({paid: !paid ? true : false});
        break;
      case 'subtract':
        this.setState({
          repeatTimes: repeatTimes > 2 ? repeatTimes - 1 : repeatTimes,
        });
        break;
    }
  };

  render() {
    const {
      name,
      value,
      type,
      paid,
      paidDate,
      repeat,
      repeatTimes,
      period,
      fetching,
      toggleCalendar,
      togglePeriod,
      error,
    } = this.state;

    const {history} = this.props;

    return (
      <View style={styles.container}>
        <UpperNav
          title={'Adicionar uma nova despesa'}
          color={Colors.spending}
          onPress={() => {
            history.goBack();
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
              label={'Valor da despesa'}
              maskInputProps={{
                placeholder: '',
                onChangeText: text => this.handleState('value', text),
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
                onChangeText: text => this.handleState('name', text),
              }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={type}
              type={'custom'}
              label={'Marcação'}
              maskOptions={{
                mask: '************',
              }}
              maskInputProps={{
                placeholder: '',
                onChangeText: text => this.handleState('type', text),
              }}
            />
          </View>
          <View style={styles.doubleView}>
            <Datepicker
              day={paidDate}
              setDay={this.handleState}
              enabled={toggleCalendar}
              type={'day'}
              toggle={this.handleState}
            />
            <CheckBox
              enable={paid}
              onPress={() => {
                this.handleState('paid');
              }}
              title={'Pago'}
            />
            <CheckBox
              enable={repeat}
              onPress={() => {
                this.handleState('repeat');
              }}
              title={'Repetir'}
            />
          </View>
          {repeat ? (
            <View style={styles.inputView}>
              <Repeat
                period={period}
                enabled={togglePeriod}
                repeatTimes={repeatTimes}
                handleState={this.handleState}
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
            this.sendForm();
          }}
          type={'single'}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createSpending: data => SpendingsController.createSpending(dispatch, data),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Spendings),
);
