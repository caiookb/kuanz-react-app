import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NativeRouter} from 'react-router-native';
import {View} from 'react-native';
import AppContainer from './AppContainer';
import * as EntryController from './src/libs/controllers/Entry';
import Loading from './src/containers/root/loading/Loading';

class App extends Component {
  state = {
    isLogged: false,
    loading: true,
    status: 'entry',
    error: false,
  };

  componentDidMount = async props => {
    this.setState({status: await this.handleLogin(), loading: false});
  };

  handleLogin = async () => {
    const {initializeData} = this.props;
    const token = await EntryController.getUserToken();

    if (token) {
      initializeData(token);
      this.setState({isLogged: true});
    }
    return EntryController.getEntryRoute(token);
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

const mapDispatchToProps = dispatch => ({
  saveUserToken: data => EntryController.saveUserTokenOnRedux(dispatch, data),
  initializeData: data => EntryController.initializeData(dispatch, data),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
