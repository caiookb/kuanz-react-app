import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.js';
import * as GoalsController from '../entry/pipeline/goalsFlow/controller';

class Dashboard extends Component {
  state = {
    goals: [],
  };

  componentDidMount = async () => {
    const {getGoals} = this.props;
    const test = await getGoals();
    this.setState({goals: test});
  };

  goToIncomes = () => {
    const {history} = this.props;
    history.push('/incomes');
  };

  logout = async () => {
    await AsyncStorage.removeItem('userToken');
  };

  render() {
    const {goals} = this.state;

    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.goalTitle}>
            <Text style={styles.goalTitleText}>
              Você tem {goals.length} objetivos!
            </Text>
          </View>

          {goals.map(goal => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardName}>Titulo: {goal.name}</Text>
                <Text style={styles.date}>
                  Data do objetivo: {goal.estimated_date}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={styles.footerMenu}>
          <TouchableHighlight
            style={styles.footerButton}
            onPress={this.goToIncomes}>
            <Text style={styles.footerButtonText}>Receitas</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Despesas</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Metas</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={this.logout}>
            <Text style={styles.footerButtonText}>Sair</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGoals: () => GoalsController.listGoal(dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(Dashboard));
