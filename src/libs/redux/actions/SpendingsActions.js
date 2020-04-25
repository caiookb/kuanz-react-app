import {SpendingsTypes} from '../types';

export const updateSpendings = (spendings): Action => ({
  type: SpendingsTypes.UPDATE_SPENDINGS,
  payload: spendings,
});

export const updateSpendingsField = (field, data) => ({
  type: SpendingsTypes.UPDATE_SPENDINGS_FIELD,
  payload: {field: field, data},
});
