import fetchServer from './server';
import {AsyncStorage} from 'react-native';

export const postGoal = async body => {
  const token = await AsyncStorage.getItem('userToken');
  console.log('BODY', token);
  return fetchServer({
    method: 'POST',
    path: ['goals', 'create'],
    body,
    auth: token,
  });
};

export const getGoals = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return fetchServer({
    method: 'GET',
    path: ['goals', 'list'],
    body: undefined,
    auth: token,
  });
};
