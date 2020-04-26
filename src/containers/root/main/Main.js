import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import {Redirect, Route, Switch} from 'react-router-native';
import {Routes} from '../../../assets/routes';
import {Nav} from '../../navigation';

import Login from '../../entry/login/Login';
import EntryComponent from '../../entry/Entry';
import SignUpInfo from '../../entry/pipeline/signUpInfo/signUpInfo';
import SignUp from '../../entry/signup/SignUp';
import GoalsFlow from '../../entry/pipeline/goalsFlow/GoalsFlow';
import Dashboard from '../../dashboard/Dashboard';
import Incomes from '../../Incomes/Incomes';
import Spendings from '../../spendings/Spendings';

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
        <Route path={sections[0]} component={EntryComponent} />
        <Route path={sections[1]} component={Login} />
        <Route path={sections[2]} component={SignUpInfo} />
        <Route path={sections[3]} component={SignUp} />
        <Route path={sections[4]} component={GoalsFlow} />
        <Route path={sections[5]} component={Dashboard} />
        <Route path={sections[6]} component={Incomes} />
        <Route path={sections[7]} component={Spendings} />
      </Switch>
    </WrapperView>
  );
};

export default Main;
