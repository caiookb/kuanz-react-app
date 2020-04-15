import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CustomButton from '../../common-components/buttons/buttons';
import Spinner from '../../common-components/spinner/Spinner';
import {Colors} from '../../assets/colors';
import * as IncomeController from './controller';
import styles from './styles';

class SignUp extends Component {
  state = {
    name: undefined,
    value: undefined,
    type: undefined,
    received: undefined,
    receivedDate: undefined,
  };

  componentDidMount = () => {
    const {history} = this.props;
  };

  isFormValid = async () => {
    const {name, value, type, received, receivedDate} = this.state;
    if (!name && !value && !type && !receivedDate && !received) {
      this.setState({error: 'Preencha todos os campos!'});
      return false;
    } else {
      this.setState({formValid: true, fetching: true});
      const income = {nname, value, type, received, receivedDate};
      this.setState({fetching: true});
      return income;
    }
  };

  sendForm = async () => {
    const {history, createIncome} = this.props;
    console.log('Chamando SENDFORM()');
    const income = await this.isFormValid();
    console.log('user criado pelo isFormValid()', user);
    const req = await createIncome(income);
    console.log('Requisição feita pelo signUp()', req);

    if (!req.error) {
      history.push('/dashboard');
    } else {
      setTimeout(() => {
        this.setState({error: req.error, fetching: false});
      }, 2000);
    }
  };

  render() {
    const {
      name,
      value,
      type,
      received,
      receivedDate,
      fetching,
      error,
    } = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.nav}></View>
        {error ? (
          <View style={styles.errorView}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        ) : null}

        <ScrollView contentContainerStyle={styles.container}>
          {!fetching ? (
            <KeyboardAvoidingView
              enabled
              behavior={'height'}
              style={styles.content}
              keyboardShouldPersistTaps="handled">
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Titulo</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({name: text})}
                  value={name}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Valor</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({value: text})}
                  value={value}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Tipo</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({type: text})}
                  value={type}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Recebido (true || false)</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({received: text})}
                  value={received}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>
                  Data de recebimento (YYYY-MM-DD)
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({receivedDate: text})}
                  value={receivedDate}
                />
              </View>
            </KeyboardAvoidingView>
          ) : (
            <View>
              <Spinner />
            </View>
          )}
        </ScrollView>
        <View style={styles.fixedBottom}>
          <CustomButton
            title={'CONFIMAR'}
            color={Colors.secondary}
            onPress={() => this.sendForm()}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createIncome: data => IncomeController.createIncome(dispatch, data),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
