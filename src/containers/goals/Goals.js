import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, BackHandler, Image} from 'react-native';
import {
  CustomButton,
  Spinner,
  Datepicker,
  TextInput,
} from '../../common-components';
import styles from './styles';
import {Colors} from '../../assets/colors';
import {GoalsController} from '../../libs/controllers';
import {done} from '../../assets/images';
import moment from 'moment';
import AddGoals from './AddGoals';

class Goals extends Component {
  state = {
    name: '',
    estimated_date: moment().format('YYYY-MM-DD'),
    value: '',
    description: '',
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

  render() {
    const {history} = this.props;
    console.log('history no goals', history);
    return <AddGoals history={history} />;
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
)(Goals);
