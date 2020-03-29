/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {NativeRouter} from 'react-router-native';
import AppContainer from './AppContainer';

class App extends Component {
  state = {
    loading: true,
    status: '/entry',
    error: false,
  };

  redirectToEntry = session => {};

  componentDidMount = () => {};

  render = () => {
    const {loading, status, error} = this.state;

    return (
      <NativeRouter>
        <AppContainer initScreen={status} />
      </NativeRouter>
    );
  };
}

export default App;
