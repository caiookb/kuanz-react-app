import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import CustomButton from '../../../common-components/buttons/buttons';
import {InteractionActions} from '../../../libs/redux/actions';
import {TextInput} from '../../../common-components';
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

  componentDidMount = () => {
    const {history} = this.props;
  };

  render() {
    const {email, password} = this.state;
    const {history} = this.props;
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

          <View style={styles.buttonsView}>
            <CustomButton title={'ENTRAR'} color={Colors.secondary} />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setModal: (id, func) => dispatch(InteractionActions.setInfoModal(id, func)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginComponent);
