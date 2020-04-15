// @flow
import {Auth} from '../../../libs/server';
import {SessionController} from '../../../libs/controllers';
import {AsyncStorage} from 'react-native';

export const signUp = async (dispatch, data) => {
  console.log('data', data);
  const req = await Auth.signUp(data).catch(err =>
    console.log('parou aqui', err),
  );
  if (req && !req.error) {
    await AsyncStorage.setItem('userToken', req.token);
    SessionController.saveSession(dispatch, req);
  }
  return req;
};
