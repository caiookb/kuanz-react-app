import {IncomesTypes} from '../types';

const initialState = {
  allIncomes: null,
  totalValue: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case IncomesTypes.UPDATE_INCOMES:
      return {
        ...state,
        ...payload,
      };
    case IncomesTypes.UPDATE_INCOMES_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          ...payload.data,
        },
      };
    case IncomesTypes.CLEAN_INCOMES:
      return {
        ...state,
      };
    default:
      return state;
  }
};
