import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../common-components/buttons/buttons';
import styles from './styles';
import { Colors } from '../../assets/colors';

class EntryComponent extends Component {
  state = {};

  render() {
    const { history } = this.props;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.logoView} />
          <View style={styles.buttonsView}>
            <CustomButton
              title={'ENTRAR'}
              color={Colors.secondary}
              onPress={() => history.push('/login')}
            />
            <CustomButton
              title={'CADASTRE-SE'}
              color={Colors.third}
              onPress={() => history.push('/signupinfo')}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default EntryComponent;
