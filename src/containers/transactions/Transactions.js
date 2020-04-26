import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {CustomButton, Cards, Spinner} from '../../common-components';
import {Colors} from '../../assets/colors';
import styles from './styles';
import moment from 'moment';

class Transactions extends Component {
  state = {};

  render() {
    const {transactions} = this.props;
    return transactions.length > 0 ? (
      transactions.map(transaction => {
        return (
          <ScrollView contentContainerStyle={styles.cards}>
            <Cards transaction={transaction} />
          </ScrollView>
        );
      })
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => {
  const {
    incomes: {allIncomes},
    spendings: {allSpendings},
  } = state;

  const transactions = allIncomes.concat(allSpendings);
  return {transactions};
};

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(Transactions),
);
