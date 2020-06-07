import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Cards, Spinner} from '../../common-components';
import styles from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';

const handleTransactions = transactions => {
  const dates = transactions.map(x => {
    const received = x.receiveDate || [];
    const paid = x.paidDate || [];
    return received + paid;
  });

  const uniqueDates = [...new Set(dates)];
  const dateToTransactions = uniqueDates.map(date => {
    let sameDate = transactions.filter(
      x => x.receiveDate === date || x.paidDate == date,
    );
    return {[date]: sameDate};
  });
  return dateToTransactions;
};

const handleDayName = date => {
  const day = moment(date).format('dddd');
  const dayNumber = moment(date).format('DD');
  return day.concat(', ' + dayNumber);
};

const Transactions = props => {
  const {transactions, navigation} = props;

  return (
    <ScrollView contentContainerStyle={styles.cards}>
      {transactions.length > 0
        ? handleTransactions(transactions).map(item => {
            return (
              <React.Fragment>
                <View style={styles.dayView}>
                  <Text style={styles.day}>
                    {handleDayName(Object.keys(item).toString())}
                  </Text>
                </View>
                {Object.values(item).map(transaction => {
                  return transaction.map(each => {
                    return (
                      <Cards
                        transaction={each}
                        onPress={() =>
                          navigation.navigate(
                            each.paidDate ? 'spendings' : 'incomes',
                            {editing: true, each},
                          )
                        }
                      />
                    );
                  });
                })}
              </React.Fragment>
            );
          })
        : null}
    </ScrollView>
  );

  transactions.length > 0 ? (
    transactions.map(transaction => {
      for (let i = 0; i < transactions.length; i++) {}
      return (
        <ScrollView contentContainerStyle={styles.cards}>
          <Cards transaction={transaction} />
        </ScrollView>
      );
    })
  ) : (
    <Spinner />
  );
};

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
