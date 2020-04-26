import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, BackHandler, Image} from 'react-native';
import {CustomButton, Spinner, Datepicker} from '../../../../common-components';
import {TextInput} from '../../../../common-components';
import styles from './styles';
import {Colors} from '../../../../assets/colors';
import {done} from '../../../../assets/images';
import * as GoalsController from './controller';
import moment from 'moment';

class GoalsFlow extends Component {
  state = {
    name: '',
    estimated_date: moment().format('YYYY-MM-DD'),
    error: undefined,
    formValid: false,
    toggleCalendar: false,
    isFetching: false,
    reqSuccess: false,
  };

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleGoBack);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleGoBack = () => {
    alert('Você não pode voltar, por favor siga o cadastro');
    return true;
  };

  isFormValid = async () => {
    const {name, estimated_date} = this.state;
    if (!name && !estimated_date) {
      this.setState({error: 'Preencha todos os campos!'});
      return false;
    } else {
      this.setState({formValid: true});
      const goal = {name, estimated_date};
      return goal;
    }
  };

  sendForm = async () => {
    const {history, createGoal} = this.props;
    const goal = await this.isFormValid();
    const req = await createGoal(goal);
    this.setState({isFetching: true});
    if (req.success) {
      this.setState({reqSuccess: true, isFetching: false});
      setTimeout(() => {
        history.push('/dashboard');
      }, 3000);
    }
  };

  handleState = (type, value) => {
    console.log('Value', value, type);
    switch (type) {
      case 'name':
        this.setState({name: value});
        break;
      case 'day':
        this.setState({estimated_date: value});
        break;
      case 'toggleCalendar':
        this.setState({toggleCalendar: value});
        break;
    }
  };

  render() {
    const {
      name,
      estimated_date,
      toggleCalendar,
      reqSuccess,
      isFetching,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textTitle}>
            {
              'Salve alguns dos seus motivos, isso vai te ajudar a seguir o objetivo'
            }
          </Text>
          <View style={styles.inputView}>
            <TextInput
              value={name}
              type={'custom'}
              label={'Objetivo'}
              maskOptions={{
                mask: '*******************************************',
              }}
              maskInputProps={{
                placeholder: '',
                onChangeText: text => this.handleState('name', text),
              }}
            />
          </View>
          <View style={styles.datepicker}>
            <Datepicker
              day={estimated_date}
              setDay={this.handleState}
              enabled={toggleCalendar}
              type={'day'}
              toggle={this.handleState}
            />
          </View>
        </View>
        <CustomButton
          title={'CONFIRMAR'}
          color={Colors.third}
          onPress={() => this.sendForm()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  createGoal: data => GoalsController.createGoal(dispatch, data),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalsFlow);
