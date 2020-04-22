import {IncomesTypes} from '../types';

export const updateIncomes = (session): Action => ({
  type: IncomesTypes.UPDATE_INCOMES,
  payload: session,
});

export const updateIncomesField = (field, data) => ({
  type: IncomesTypes.UPDATE_INCOMES_FIELD,
  payload: {field: field, data},
});
