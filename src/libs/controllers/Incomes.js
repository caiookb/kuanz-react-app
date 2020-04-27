import {IncomesActions} from '../redux/actions';
import {Incomes} from '../server';
import {IncomesController, StoreController} from '../controllers';

export const createIncome = (dispatch, data) => {
  const date = StoreController.date();
  const token = StoreController.getUserToken();
  return Incomes.postIncome(data, token, date.firstDate, date.lastDate)
    .then(res => {
      const {allIncomes, totalValue} = res;
      const incomesObject = {allIncomes, totalValue};
      saveIncomesOnRedux(dispatch, incomesObject);
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const fetchAllIncomes = async (dispatch, tokinho) => {
  const date = StoreController.date();
  const token = StoreController.getUserToken();
  return Incomes.getAllIncomes(date.firstDate, date.lastDate, token)
    .then(incomes => {
      saveIncomesOnRedux(dispatch, incomes);
    })
    .catch(err => {
      console.log('Erro no fetchAllIncomes', err);
    });
};

export const saveIncomesOnRedux = (dispatch, incomes) => {
  return dispatch(IncomesActions.updateIncomes(incomes));
};
