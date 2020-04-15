import fetchServer from './server';
import {AsyncStorage} from 'react-native';

export const postIncome = async body => {
  const token = await AsyncStorage.getItem('userToken');
  console.log('BODY', body);
  return fetchServer({
    method: 'POST',
    path: ['incomes', 'create'],
    body,
    auth: token,
  });
};
