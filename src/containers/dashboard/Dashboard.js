import React, {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableHighlight,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.js';
import {FooterMenu, CustomButton, Monthpicker} from '../../common-components';
import {
  CalendarController,
  IncomesController,
  SpendingsController,
} from '../../libs/controllers';
import {profile, config} from '../../assets/images.js';
import moment from 'moment';
import {saveIncomesOnRedux} from '../../libs/controllers/Incomes.js';

class Dashboard extends Component {
  state = {
    monthModal: false,
    date: moment(),
  };

  componentWillMount = async () => {
    const {saveDateOnRedux} = this.props;
    const {date} = this.state;
    saveDateOnRedux(date);
  };

  handleNavButtons = route => {
    const {history} = this.props;
    history.push(`/${route}`, {});
  };

  handleMonthModal = () => {
    const {monthModal} = this.state;
    this.setState({monthModal: monthModal ? false : true});
  };

  sendDateToReux = date => {
    const {saveDateOnRedux, fetchIncomes, fetchSpendings} = this.props;
    this.setState({date: moment(date).format('YYYY-MM-DD')});
    saveDateOnRedux(date);
    fetchIncomes();
    fetchSpendings();
  };

  handleDate = (value, type) => {
    const {date} = this.state;
    switch (type) {
      case 'monthArrowAdd':
        this.sendDateToReux(moment(date).add(1, 'month'));
        break;
      case 'monthArrowSub':
        this.sendDateToReux(moment(date).subtract(1, 'month'));
        break;
      case 'yearAdd':
        this.sendDateToReux(moment(date).add(1, 'year'));
        break;
      case 'yearSub':
        this.sendDateToReux(moment(date).subtract(1, 'year'));
        break;
      case 'selectMonth':
        this.sendDateToReux(moment(date).month(value));
    }
  };

  logout = async () => {
    const {history} = this.props;
    await AsyncStorage.removeItem('userToken');
    history.replace('/entry');
  };

  render() {
    const {monthModal, date} = this.state;
    const {incomesTotal, spendingsTotal} = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.nav, styles.shadow]}>
          <TouchableHighlight>
            <Image source={profile} />
          </TouchableHighlight>
          <Monthpicker
            enabled={monthModal}
            date={date}
            handleMonthModal={this.handleMonthModal}
            handleDate={this.handleDate}
          />
          <TouchableHighlight>
            <Image source={config} />
          </TouchableHighlight>
        </View>

        <View>
          <FooterMenu
            incomes={incomesTotal}
            spendings={spendingsTotal}
            handleNavButton={this.handleNavButtons}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    incomes,
    incomes: {totalValue: incomesTotal},
    spendings,
    spendings: {totalValue: spendingsTotal},
  } = state;

  return {incomes, incomesTotal, spendings, spendingsTotal};
};

const mapDispatchToProps = dispatch => ({
  saveDateOnRedux: date => CalendarController.saveDateOnRedux(dispatch, date),
  fetchIncomes: () => IncomesController.fetchAllIncomes(dispatch),
  fetchSpendings: () => SpendingsController.fetchAllSpendings(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);
