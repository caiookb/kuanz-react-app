import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import {Redirect, Route, Switch} from 'react-router-native';
import {Routes} from '../../../assets/routes';
import {Nav} from '../../navigation';

import Login from '../../entry/login/Login';
import SignUpInfo from '../../entry/pipeline/signUpInfo/signUpInfo';
import SignUp from '../../entry/signup/SignUp';
import GoalsFlow from '../../entry/pipeline/goalsFlow/GoalsFlow';

import styles from './styles';

const Main = props => {
  const {screen} = props;
  const {sections} = Routes;
  const WrapperView = Platform.OS === 'ios' ? SafeAreaView : View;

  return (
    <WrapperView style={styles.container}>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to={screen} />} />
        <Route path={sections[0]} component={Login} />
        <Route path={sections[1]} component={SignUpInfo} />
        <Route path={sections[2]} component={SignUp} />
        <Route path={sections[3]} component={GoalsFlow} />
      </Switch>
    </WrapperView>
  );
};

export default Main;
