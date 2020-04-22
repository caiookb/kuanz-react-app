import {SessionActions, SpendingsActions} from '../redux/actions';
import {Spendings} from '../server';

export const createSpending = (dispatch, data) => {
  return Spendings.postSpending(data)
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

export const fetchAllSpendings = async (dispatch, token) => {
  return Spendings.getAllSpendings(token)
    .then(spendings => {
      saveIncomesOnRedux(dispatch, spendings);
    })
    .catch(err => {
      console.log('Erro no fetchAllSpendings', err);
    });
};

export const saveSpendingsOnRedux = (dispatch, spendings) => {
  return dispatch(SpendingsActions.updateSpendings(spendings));
};
