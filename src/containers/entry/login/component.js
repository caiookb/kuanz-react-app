import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableHighlightBase} from 'react-native';
import {CustomButton, Spinner} from '../../../common-components';
import {InteractionActions} from '../../../libs/redux/actions';
import {TextInput} from '../../../common-components';
import styles from './styles';
import {Colors} from '../../../assets/colors';
import {AuthController} from '../../../libs/controllers';

class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    modalVisible: false,
    isFetching: false,
  };

  toggleModal = () => {
    const {setModal} = this.props;
    const data = {
      toggleModal: this.toggleModal,
    };
    setModal('ChangePasswordModal', data);
  };

  onChangeInput = (text, type) => {
    switch (type) {
      case 'email':
        this.setState({email: text});
        break;
      case 'password':
        this.setState({password: text});
        break;
    }
  };

  setSpinner = trigger => {
    this.setState({isFetching: trigger});
  };

  validator = () => {
    const {email, password} = this.state;
    const user = {email, password};
    return email !== '' && password !== '' ? user : false;
  };

  sendForm = async () => {
    const {history, signIn} = this.props;
    const isValid = await this.validator();
    if (isValid) {
      this.setSpinner(true);
      const req = await signIn(isValid);
      if (req && !req.error) {
        history.push('/dashboard');
      } else {
        this.setSpinner(false);
        this.setState({error: req.error});
      }
    }
  };

  render() {
    const {email, password, isFetching, error} = this.state;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.logoView} />
          <View style={styles.formView}>
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
                  mask: '************',
                }}
                maskInputProps={{
                  placeholder: '',
                  onChangeText: text => this.onChangeInput(text, 'password'),
                }}
              />
            </View>
            <View style={styles.changePassword}>
              <Text
                style={styles.changePasswordText}
                onPress={this.toggleModal}>
                Esqueceu sua senha?
              </Text>
            </View>
          </View>

          {isFetching ? (
            <Spinner />
          ) : (
            <View style={styles.buttonsView}>
              {error ? (
                <View style={styles.errorView}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              ) : null}
              <CustomButton
                title={'ENTRAR'}
                color={Colors.secondary}
                onPress={this.sendForm}
              />
            </View>
          )}
        </View>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setModal: (id, func) => dispatch(InteractionActions.setInfoModal(id, func)),
  signIn: data => AuthController.signIn(dispatch, data),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginComponent);
