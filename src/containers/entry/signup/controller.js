// @flow
import {Auth} from '../../../libs/server';
import {SessionController} from '../../../libs/controllers';

export const signUp = async (dispatch, data) => {
  console.log('data', data);
  const req = await Auth.signUp(data);
  if (!req.error) {
    SessionController.saveSession(dispatch, req);
    console.log('salvou no redux????????????????????');
  }
  return req;
};
