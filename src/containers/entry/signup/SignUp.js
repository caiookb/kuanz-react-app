import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextInput, Spinner, CustomButton} from '../../../common-components';
import {AuthController} from '../../../libs/controllers';
import styles from './styles';
import {Colors} from '../../../assets/colors';

class SignUp extends Component {
  state = {
    name: undefined,
    last_name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    error: undefined,
    formValid: false,
    fetching: false,
  };

  componentDidMount = () => {
    const {history} = this.props;
  };

  onChangeInput = (text, type) => {
    switch (type) {
      case 'name':
        this.setState({name: text});
        break;
      case 'last_name':
        this.setState({last_name: text});
        break;
      case 'email':
        this.setState({email: text});
        break;
      case 'password':
        this.setState({password: text});
        break;
      case 'confirmPassword':
        this.setState({confirmPassword: text});
        break;
    }
  };

  isFormValid = async () => {
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
    console.log('Chamando SENDFORM()');
    const user = await this.isFormValid();
    console.log('user criado pelo isFormValid()', user);
    const req = await signUp(user);
    console.log('Requisição feita pelo signUp()', req);

    if (!req.error) {
      history.push('/goalsFlow');
    } else {
      setTimeout(() => {
        this.setState({error: req.error, fetching: false});
      }, 2000);
    }
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
        <View style={styles.nav} />
        {error ? (
          <View style={styles.errorView}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        ) : null}

        <ScrollView contentContainerStyle={styles.container}>
          {!fetching ? (
            <KeyboardAvoidingView
              enabled
              behavior={'padding'}
              style={styles.content}
              keyboardShouldPersistTaps="handled">
              <View style={styles.inputView}>
                <TextInput
                  value={name}
                  type={'custom'}
                  label={'Nome'}
                  maskOptions={{
                    mask: '***************************',
                  }}
                  maskInputProps={{
                    placeholder: '',
                    onChangeText: text => this.onChangeInput(text, 'name'),
                  }}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  value={last_name}
                  type={'custom'}
                  label={'Sobrenome'}
                  maskOptions={{
                    mask: '***************************',
                  }}
                  maskInputProps={{
                    placeholder: '',
                    onChangeText: text => this.onChangeInput(text, 'last_name'),
                  }}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  value={email}
                  type={'custom'}
                  label={'Email'}
                  maskOptions={{
                    mask: '***************************',
                  }}
                  maskInputProps={{
                    placeholder: '',
                    onChangeText: text => this.onChangeInput(text, 'email'),
                  }}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  value={password}
                  type={'custom'}
                  label={'Senha'}
                  maskOptions={{
                    mask: '***************************',
                  }}
                  maskInputProps={{
                    placeholder: '',
                    onChangeText: text => this.onChangeInput(text, 'password'),
                  }}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  value={confirmPassword}
                  type={'custom'}
                  label={'Confirme a senha'}
                  maskOptions={{
                    mask: '***************************',
                  }}
                  maskInputProps={{
                    placeholder: '',
                    onChangeText: text =>
                      this.onChangeInput(text, 'confirmPassword'),
                  }}
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
            color={Colors.third}
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

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(SignUp),
);
