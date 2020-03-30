// @flow
import {Auth} from '../../../libs/server';

export const signUp = data => {
  console.log('data no signUp', data);
  try {
    return Auth.signUp(data)
      .then(res => {
        console.log('responseeeeeee', res);
      })
      .catch(err => {
        console.log('errouuuuuuu', err);
      });
  } catch (err) {
    console.log('erro de requisição', err);
  }
};
