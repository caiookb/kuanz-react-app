import React, { Component } from 'react';
import { NativeRouter } from 'react-router-native';
import AppContainer from './AppContainer';
import * as EntryController from './src/libs/controllers/Entry'


class App extends Component {

  state = {
    isLogged: false,
    loading: true,
    status: '/entry',
    error: false,
  };

  componentDidMount = async (props) => {
    this.setState({ status: await this.handleLogin() })
  };

  componentDidUpdate = () => {
    const { status } = this.state;
    console.log('status updated', status)
  }
  handleLogin = async () => {
    const token = await EntryController.getUserToken();
    if (token) {
      this.setState({ isLogged: true });
    }
    return EntryController.getEntryRoute();
  }

  render = () => {
    const { status } = this.state;
    console.log('status', status)
    return (
      <NativeRouter>
        <AppContainer initScreen={status} />
      </NativeRouter>
    );
  };
}

export default App;
