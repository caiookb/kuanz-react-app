import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {
  spendingDot,
  ammountDot,
  incomesDot,
  goalsIcon,
  greenArrow,
  redArrow,
} from '../../assets/images';
import {IconButton} from '../index';
import {Colors} from '../../assets/colors';

const dot = title => {
  return title === 'Despesas'
    ? spendingDot
    : title === 'Receita'
    ? incomesDot
    : ammountDot;
};

const color = title => {
  return title === 'Despesas'
    ? Colors.textSpending
    : title === 'Receita'
    ? Colors.textIncome
    : Colors.blue2;
};

const handleValue = title => {};

const BalanceStats = props => {
  const {
    item: {title, value},
    incomes,
    spendings,
  } = props;

  return (
    <View style={styles.balanceStats}>
      <View style={styles.balanceStatsView}>
        <Image style={styles.dot} source={dot(title)} />
        <Text style={styles.balanceStatsTitle}>{title}</Text>
      </View>
      <Text style={[styles.balanceStatsValue, {color: color(title)}]}>
        R$
        {title === 'Despesas'
          ? spendings
          : title === 'Receita'
          ? incomes
          : (incomes - spendings).toFixed(2)}
      </Text>
    </View>
  );
};

const DownNavBar = props => {
  const {handleNavButton} = props;
  return (
    <View style={styles.downNavBar}>
      <IconButton
        title={'Receita'}
        icon={greenArrow}
        color={Colors.income}
        onPress={() => {
          handleNavButton('incomes');
        }}
      />
      <TouchableHighlight
        onPress={() => {
          handleNavButton('goals');
        }}>
        <Image source={goalsIcon} />
      </TouchableHighlight>

      <IconButton
        title={'Despesa'}
        icon={redArrow}
        color={Colors.spending}
        onPress={() => {
          handleNavButton('spendings');
        }}
        type={'spendings'}
      />
    </View>
  );
};

const values = [
  {
    title: 'Receita',
    value: '1.302,00',
  },
  {
    title: 'Saldo disponível',
    value: '1.302,00',
  },
  {
    title: 'Despesas',
    value: '1.302,00',
  },
];

const FooterMenu = props => {
  const {handleNavButton, incomes, spendings} = props;

  return (
    <View style={styles.container}>
      <View style={styles.balanceView}>
        {values.map(item => {
          return (
            <BalanceStats item={item} incomes={incomes} spendings={spendings} />
          );
        })}
      </View>
      <DownNavBar handleNavButton={handleNavButton} />
    </View>
  );
};

export default FooterMenu;
