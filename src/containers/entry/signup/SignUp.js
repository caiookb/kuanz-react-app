import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomButton from '../../../common-components/buttons/buttons';
import {Colors} from '../../../assets/colors';
import * as AuthController from './controller';

import styles from './styles';
import {Auth} from '../../../libs/server';

class SignUp extends Component {
  state = {
    name: 'Caio',
    last_name: 'Henrique',
    email: 'test2@mail.com',
    password: '123',
    confirmPassword: '123',
    error: undefined,
    formValid: false,
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
      return user;
    } else {
      this.setState({error: 'Senhas não são iguais!'});
      return false;
    }
  };

  sendForm = () => {
    const user = this.isFormValid();
    AuthController.signUp(user);
  };

  createUser = user => {
    AuthController.signUp(user).then(res => {
      console.log('response do post create user: ', res);
    });
  };

  render() {
    const {name, last_name, email, password, confirmPassword} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.nav}></View>
        <ScrollView contentContainerStyle={styles.container}>
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

export default SignUp;
