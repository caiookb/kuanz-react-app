import React, {Component} from 'react';
import {View, Text, AsyncStorage, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.js';
import {FooterMenu, CustomButton} from '../../common-components';
import * as GoalsController from '../entry/pipeline/goalsFlow/controller';
import {Colors} from '../../assets/colors.js';

class Dashboard extends Component {
  state = {
    goals: [],
  };

  componentDidMount = async () => {
    const {getGoals} = this.props;
    const test = await getGoals();
    this.setState({goals: test});
  };

  handleNavButtons = route => {
    const {history} = this.props;
    history.push(`/${route}`);
  };

  logout = async () => {
    const {history} = this.props;
    await AsyncStorage.removeItem('userToken');
    history.replace('/entry');
  };

  render() {
    const {incomesTotal} = this.props;

    return (
      <View style={styles.container}>
        <CustomButton color={Colors.fifth} onPress={() => this.logout()} />

        <View>
          <FooterMenu
            incomes={incomesTotal}
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
  } = state;

  return {incomes, incomesTotal};
};

const mapDispatchToProps = dispatch => ({
  getGoals: () => GoalsController.listGoal(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);
