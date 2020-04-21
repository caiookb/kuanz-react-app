import {IncomesTypes} from '../types';

export const updateSession = (session): Action => ({
  type: IncomesTypes.UPDATE_INCOMES,
  payload: session,
});

export const updateSessionField = (field, data) => ({
  type: IncomesTypes.UPDATE_INCOMES_FIELD,
  payload: {field: field, data},
});
