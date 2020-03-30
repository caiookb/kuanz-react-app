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
import CustomButton from '../../../common-components/buttons/buttons';
import Spinner from '../../../common-components/spinner/Spinner';
import {Colors} from '../../../assets/colors';
import * as AuthController from './controller';
import styles from './styles';
import {Auth} from '../../../libs/server';

class SignUp extends Component {
  state = {
    name: 'Teofilo',
    last_name: 'Ribeiro',
    email: 'teo12@mail.com',
    password: '123',
    confirmPassword: '123',
    error: undefined,
    formValid: false,
    fetching: false,
  };

  componentDidMount = () => {
    const {history} = this.props;
  };

  isFormValid = () => {
    const {name, last_name, email, password, confirmPassword} = this.state;
    if (!name && !last_name && !email && !password && !confirmPassword) {
      this.setState({error: 'Preencha todos os campos!'});
      return false;
    } else {
      this.setState({formValid: true});
      const user = {name, last_name, email, password};
      return this.validPassword(password, confirmPassword, user);
    }
  };

  validPassword = (password, confirmPassword, user) => {
    if (password == confirmPassword) {
      this.setState({fetching: true});
      return user;
    } else {
      this.setState({error: 'Senhas não são iguais!'});
      return false;
    }
  };

  sendForm = async () => {
    const {history, signUp} = this.props;
    const user = await this.isFormValid();
    const req = await signUp(user);
    if (!req.error) {
      history.push('/goalsFlow');
    }
    // const request = await AuthController.signUp(user);
    // if (!request.error) {
    //   this.setState({error: undefined});
    //   const {token} = request;
    //   await AsyncStorage.setItem('userToken', token);
    //   setTimeout(() => {
    //     this.setState({fetching: false});
    //     history.push('/goalsFlow');
    //   }, 2000);
    // } else {
    //   setTimeout(() => {
    //     this.setState({error: request.error, fetching: false});
    //   }, 2000);
    // }
  };

  render() {
    const {
      name,
      last_name,
      email,
      password,
      confirmPassword,
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
                <Text style={styles.inputTitle}>Nome</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({name: text})}
                  value={name}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Sobrenome</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({last_name: text})}
                  value={last_name}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({email: text})}
                  value={email}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({password: text})}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Confirme sua senha</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({confirmPassword: text})}
                  value={confirmPassword}
                  secureTextEntry={true}
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
  signUp: data => AuthController.signUp(dispatch, data),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
