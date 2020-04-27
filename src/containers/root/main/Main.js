import React from 'react';
import {Platform, SafeAreaView, View, Easing} from 'react-native';
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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import styles from './styles';

const Stack = createStackNavigator();

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.linear,
  },
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 100,
    mass: 3,
    overshootClamping: false,
    restDisplacementeThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Main = props => {
  const {screen} = props;
  const {sections} = Routes;
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName={screen}>
        <Stack.Screen
          name="entry"
          options={{headerShown: false}}
          component={EntryComponent}
        />
        <Stack.Screen
          name="login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="signupinfo"
          options={{headerShown: false}}
          component={SignUpInfo}
        />
        <Stack.Screen
          name="signUp"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="goalsFlow"
          options={{headerShown: false}}
          component={GoalsFlow}
        />
        <Stack.Screen
          name="dashboard"
          options={{headerShown: false}}
          component={Dashboard}
        />
        <Stack.Screen
          name="incomes"
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'vertical-inverted',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
          }}
          component={Incomes}
        />
        <Stack.Screen
          name="spendings"
          options={{headerShown: false}}
          component={Spendings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
