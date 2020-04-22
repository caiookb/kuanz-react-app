import {IncomesActions} from '../redux/actions';
import {Incomes} from '../server';
import {IncomesController} from '.';

export const createIncome = (dispatch, data) => {
  return Incomes.postIncome(data)
    .then(res => {
      const {allIncomes, totalValue} = res;
      const incomesObject = {allIncomes, totalValue};
      IncomesController.saveIncomesOnRedux(dispatch, incomesObject);
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const fetchAllIncomes = async (dispatch, token) => {
  return Incomes.getAllIncomes(token)
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
