import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-native';
import {InteractionActions} from '../../../libs/redux/actions';

import LoginComponent from './component';
class Login extends Component {
  state = {
    teste: 1,
  };

  componentDidMount = () => {
    const {history} = this.props;
  };

  render() {
    const {history} = this.props;

    return <LoginComponent history={history} />;
  }
}

export default Login;
