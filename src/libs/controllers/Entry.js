import {AsyncStorage} from 'react-native';
import {SessionController, IncomesController, SpendingsController} from '.';
import {StoreData, dispatch} from './Store';
export const getUserToken = async () => {
  const userToken = await AsyncStorage.getItem('userToken');
  return userToken;
};

export const initializeData = async (dispatch, data) => {
  SessionController.saveUserToken(dispatch, data);
  IncomesController.fetchAllIncomes(dispatch, data);
  SpendingsController.fetchAllSpendings(dispatch, data);
};

export const getEntryRoute = async userToken => {
  if (userToken) {
    return 'dashboard';
  } else if (!userToken) {
    return 'entry';
  }
};
