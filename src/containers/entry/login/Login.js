import React, {Component} from 'react';
import LoginComponent from './component';

class Login extends Component {
  state = {
    teste: 1,
  };

  render() {
    const {navigation} = this.props;

    return <LoginComponent navigation={navigation} />;
  }
}

export default Login;
