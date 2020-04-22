// @flow
import {Auth} from '../server';
import {SessionController} from '../controllers';
import {AsyncStorage} from 'react-native';

export const signUp = async (dispatch, data) => {
  const req = await Auth.signUp(data).catch(err =>
    console.log('Caiu no catch', err),
  );
  if (req && !req.error) {
    await AsyncStorage.setItem('userToken', req.token);
    SessionController.saveSession(dispatch, req);
  }
  return req;
};

export const signIn = async (dispatch, data) => {
  console.log('data', data);
  const req = await Auth.signIn(data).catch(err =>
    console.log('parou aqui', err),
  );
  if (req && !req.error) {
    await AsyncStorage.setItem('userToken', req.token);
    SessionController.saveSession(dispatch, req);
  }
  return req;
};
