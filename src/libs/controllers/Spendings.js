import {SpendingsActions} from '../redux/actions';
import {Spendings} from '../server';
import {SpendingsController, StoreController} from '../controllers';

export const createSpending = (dispatch, data) => {
  const date = StoreController.date();
  const token = StoreController.getUserToken();
  return Spendings.postSpending(data, token, date.firstDate, date.lastDate)
    .then(res => {
      const {allSpendings, totalValue} = res;
      const spendingObject = {allSpendings, totalValue};
      saveSpendingsOnRedux(dispatch, spendingObject);
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const fetchAllSpendings = async (dispatch, tokinho) => {
  const date = StoreController.date();
  const token = StoreController.getUserToken();
  return Spendings.getAllSpendings(date.firstDate, date.lastDate, token)
    .then(spendings => {
      saveSpendingsOnRedux(dispatch, spendings);
    })
    .catch(err => {
      console.log('Erro no fetchAllSpendings', err);
    });
};

export const saveSpendingsOnRedux = (dispatch, spendings) => {
  return dispatch(SpendingsActions.updateSpendings(spendings));
};
