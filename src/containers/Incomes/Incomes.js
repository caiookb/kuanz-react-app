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
  Datepicker,
  Repeat,
  Tag,
} from '../../common-components';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {Colors} from '../../assets/colors';
import {IncomesController, TagsController} from '../../libs/controllers';
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
    repeat: false,
    repeatTimes: 0,
    period: 'Semanal',
    error: '',
    fetching: false,
    toggleCalendar: false,
    togglePeriod: false,
  };

  componentDidMount = () => {
    const {fetchTags} = this.props;
    fetchTags();
  };

  isFormValid = async () => {
    const {
      name,
      value,
      type,
      received,
      receiveDate,
      repeat,
      repeatTimes,
      period,
    } = this.state;
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
      const incomeRepeat = {...income, repeat: repeatTimes, period};
      this.setState({fetching: true});
      console.log('INCOME REPEAT', incomeRepeat);
      return repeat ? incomeRepeat : income;
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

  sendForm = async () => {
    const {history, createIncome} = this.props;
    const income = await this.isFormValid();
    const req = await createIncome(income);
    if (!req.error) {
      history.push('/dashboard');
    } else {
      setTimeout(() => {
        this.setState({error: req.error, fetching: false});
      }, 2000);
    }
  };

  handleState = (type, value) => {
    const {repeatTimes, repeat, received} = this.state;
    switch (type) {
      case 'day':
        this.setState({receiveDate: value});
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
        this.setState({received: !received ? true : false});
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
      received,
      receiveDate,
      fetching,
      toggleCalendar,
      repeat,
      repeatTimes,
      period,
      togglePeriod,
      error,
    } = this.state;

    const {history, tag} = this.props;

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
            <Tag handleState={this.handleState} tagValue={type} tags={tag} />
          </View>
          <View style={styles.doubleView}>
            <Datepicker
              day={receiveDate}
              setDay={this.handleState}
              enabled={toggleCalendar}
              type={'day'}
              toggle={this.handleState}
            />
            <CheckBox
              enable={received}
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

const mapStateToProps = state => {
  const {tag} = state;
  return state;
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
