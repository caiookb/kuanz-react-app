import React, {Component} from 'react';
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
