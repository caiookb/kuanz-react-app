import {IncomesActions} from '../redux/actions';

export const saveIncomesOnRedux = (dispatch, incomes) => {
  return dispatch(IncomesActions.updateIncomes(incomes));
};
