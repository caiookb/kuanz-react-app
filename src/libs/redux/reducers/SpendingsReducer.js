import {SpendingsTypes} from '../types';

const initialState = {
  spendings: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SpendingsTypes.UPDATE_SPENDINGS:
      return {
        ...state,
        ...payload,
      };
    case SpendingsTypes.UPDATE_SPENDINGS_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          ...payload.data,
        },
      };
    case SpendingsTypes.CLEAN_SPENDINGS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
