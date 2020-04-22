import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, BackHandler, Image} from 'react-native';
import {CustomButton, Spinner} from '../../../../common-components';
import {TextInput} from '../../../../common-components';
import styles from './styles';
import {Colors} from '../../../../assets/colors';
import {done} from '../../../../assets/images';
import * as GoalsController from './controller';

class GoalsFlow extends Component {
  state = {
    name: '',
    estimated_date: '20202020',
    error: undefined,
    formValid: false,
    isFetching: false,
    reqSuccess: false,
  };

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleGoBack);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleGoBack = () => {
    alert('Você não pode voltar, por favor siga o cadastro');
    return true;
  };

  onChangeInput = (text, type) => {
    switch (type) {
      case 'name':
        this.setState({name: text});
        break;
      case 'estimated_date':
        this.setState({estimated_date: text});
        break;
    }
  };

  isFormValid = async () => {
    const {name, estimated_date} = this.state;
    if (!name && !estimated_date) {
      this.setState({error: 'Preencha todos os campos!'});
      return false;
    } else {
      this.setState({formValid: true});
      const goal = {name, estimated_date};
      return goal;
    }
  };

  sendForm = async () => {
    const {history, createGoal} = this.props;
    const goal = await this.isFormValid();
    const req = await createGoal(goal);
    this.setState({isFetching: true});
    if (req.success) {
      this.setState({reqSuccess: true, isFetching: false});
      setTimeout(() => {
        history.push('/dashboard');
      }, 3000);
    }
  };

  render() {
    const {name, estimated_date, reqSuccess, isFetching} = this.state;
    return (
      <View style={styles.container}>
        {!reqSuccess ? (
          <React.Fragment>
            <View style={styles.nav} />
            <View style={styles.content}>
              <Text style={styles.textTitle}>
                {
                  'Salve alguns dos seus motivos, isso vai te ajudar a seguir o objetivo'
                }
              </Text>
              <View style={styles.card}>
                <View style={styles.inputView}>
                  <TextInput
                    value={name}
                    type={'custom'}
                    label={'Objetivo'}
                    maskOptions={{
                      mask: '*******************************************',
                    }}
                    maskInputProps={{
                      placeholder: '',
                      onChangeText: text => this.onChangeInput(text, 'name'),
                    }}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    value={estimated_date}
                    type={'custom'}
                    label={'Data estimada'}
                    maskOptions={{
                      mask: '99/99/9999',
                    }}
                    maskInputProps={{
                      placeholder: '',
                      onChangeText: text =>
                        this.onChangeInput(text, 'estimated_date'),
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.fixedBottom}>
              <CustomButton
                title={'CONFIRMAR'}
                color={Colors.third}
                onPress={() => this.sendForm()}
              />
            </View>
          </React.Fragment>
        ) : isFetching ? (
          <Spinner />
        ) : (
          <View style={styles.success}>
            <Text style={styles.successText}>
              {'Objetivo cadastrado com sucesso!'}
            </Text>
            <Image style={styles.cardImageInfo} source={done} />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  createGoal: data => GoalsController.createGoal(dispatch, data),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalsFlow);
