import React, {Component} from 'react';
import {NativeRouter} from 'react-router-native';
import {View} from 'react-native';
import AppContainer from './AppContainer';
import * as EntryController from './src/libs/controllers/Entry';
import {AsyncStorage} from 'react-native';
import Loading from './src/containers/root/loading/Loading';

class App extends Component {
  state = {
    isLogged: false,
    loading: true,
    status: '/entry',
    error: false,
  };

  componentDidMount = async props => {
    console.log('HANDLE ROUTING', await this.handleLogin());
    this.setState({status: await this.handleLogin(), loading: false});
  };

  handleLogin = async () => {
    const token = await EntryController.getUserToken();
    if (token) {
      this.setState({isLogged: true});
    }
    return EntryController.getEntryRoute();
  };

  render = () => {
    const {status, loading} = this.state;
    return loading ? (
      <View>
        <Loading />
      </View>
    ) : (
      <NativeRouter>
        <AppContainer initScreen={status} />
      </NativeRouter>
    );
  };
}

export default App;
