// @flow
import {Incomes} from '../../libs/server';
import {IncomesController} from '../../libs/controllers';

export const createIncome = (dispatch, data) => {
  return Incomes.postIncome(data)
    .then(res => {
      IncomesController.saveIncomesOnRedux(dispatch, res.allIncomes);
      return res;
    })
    .catch(err => {
      return err;
    });
};
