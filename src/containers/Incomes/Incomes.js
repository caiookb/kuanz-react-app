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
} from '../../common-components';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {Colors} from '../../assets/colors';
import {IncomesController} from '../../libs/controllers';
import styles from './styles';
import moment from 'moment';

configLocalCalendar();

class Incomes extends Component {
  state = {
    name: undefined,
    value: 0,
    type: undefined,
    received: true,
    receiveDate: moment().format('YYYY-MM-DD'),
    error: '',
    fetching: false,
    toggleCalendar: false,
  };

  componentDidMount = () => {
    const {history} = this.props;
  };

  isFormValid = async () => {
    const {name, value, type, received, receiveDate} = this.state;
    if (!name && !value && !type && !receiveDate && !received) {
      this.setState({error: 'Preencha todos os campos!'});
      return false;
    } else {
      this.setState({formValid: true, fetching: true});
      const income = {
        name,
        value: this.handleValue(),
        type,
        received,
        receiveDate,
      };
      this.setState({fetching: true});
      return income;
    }
  };

  handleValue = () => {
    const {value} = this.state;
    console.log('value', value);
    const cleanValue = value
      .split('.')
      .join('')
      .replace(',', '.');

    console.log('clean value', cleanValue);
    return parseFloat(cleanValue.replace('R$', '')).toFixed(2);
  };

  sendForm = async () => {
    const {history, createIncome} = this.props;
    const income = await this.isFormValid();
    console.log('INCOME INDO PRA REQ', income);
    const req = await createIncome(income);
    console.log('Requisição feita pelo sendForm', req);
    if (!req.error) {
      history.push('/dashboard');
    } else {
      setTimeout(() => {
        this.setState({error: req.error, fetching: false});
      }, 2000);
    }
  };

  onChangeInput = (text, type) => {
    switch (type) {
      case 'name':
        this.setState({name: text});
        break;
      case 'value':
        this.setState({value: text});
        break;
      case 'type':
        this.setState({type: text});
        break;
      case 'received':
        this.setState({received: text});
        break;
      case 'receiveDate':
        this.setState({receiveDate: text});
        break;
    }
  };

  handleCheckBox = () => {
    const {received} = this.state;
    if (received) {
      this.setState({received: false});
    } else {
      this.setState({received: true});
    }
  };

  handleDaySelected = date => {
    console.log('date no handle day', date);
    this.setState({receiveDate: date});
  };

  toggleCalendarModal = trigger => {
    this.setState({toggleCalendar: trigger});
  };

  render() {
    const {
      name,
      value,
      type,
      received,
      receiveDate,
      fetching,
      toggleCalendar,
      error,
    } = this.state;

    const {history} = this.props;

    return (
      <View style={styles.container}>
        <UpperNav
          title={'Adicionar uma nova receita'}
          color={Colors.income}
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
              label={'Valor da receita'}
              maskInputProps={{
                placeholder: '',
                onChangeText: text => this.onChangeInput(text, 'value'),
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
                onChangeText: text => this.onChangeInput(text, 'name'),
              }}
            />
          </View>
          <View style={styles.doubleView}>
            <Datepicker
              day={receiveDate}
              setDay={this.handleDaySelected}
              enabled={toggleCalendar}
              type={'recebimento'}
              toggle={this.toggleCalendarModal}
            />
            <CheckBox
              enable={received}
              onPress={this.handleCheckBox}
              title={'Recebido'}
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
                onChangeText: text => this.onChangeInput(text, 'type'),
              }}
            />
          </View>
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
            this.sendForm();
          }}
          type={'single'}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createIncome: data => IncomesController.createIncome(dispatch, data),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Incomes),
);
