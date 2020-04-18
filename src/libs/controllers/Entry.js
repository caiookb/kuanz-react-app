import {AsyncStorage} from 'react-native';

export const getUserToken = async () => {
  const userToken = await AsyncStorage.getItem('userToken');
  return userToken;
};

export const getEntryRoute = async () => {
  const userToken = await getUserToken();

  if (userToken) {
    return '/dashboard';
  } else if (!userToken) {
    return '/entry';
  }
};
