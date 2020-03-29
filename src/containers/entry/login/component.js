import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, Text} from 'react-native';
import CustomButton from '../../../common-components/buttons/buttons';
import {InteractionActions} from '../../../libs/redux/actions';

import styles from './styles';
import {Colors} from '../../../assets/colors';

class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
    modalVisible: false,
  };

  toggleModal = () => {
    const {setModal} = this.props;
    const data = {
      toggleModal: this.toggleModal,
    };
    setModal('ChangePasswordModal', data);
  };

  componentDidMount = () => {
    const {history} = this.props;
    console.log('hisotryyyy', history);
  };

  render() {
    const {email, password, modalVisible} = this.state;
    const {history} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.logoView}></View>
        <View style={styles.formView}>
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
            <Text style={styles.inputForgotPassword} onPress={this.toggleModal}>
              Esqueceu sua senha?
            </Text>
          </View>
        </View>
        <View style={styles.buttonsView}>
          <CustomButton title={'LOGIN'} color={Colors.secondary} />
          <CustomButton
            title={'CADASTRE-SE'}
            color={Colors.third}
            onPress={() => history.push('/signupinfo')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setModal: (id, func) => dispatch(InteractionActions.setInfoModal(id, func)),
});

export default connect(null, mapDispatchToProps)(LoginComponent);
