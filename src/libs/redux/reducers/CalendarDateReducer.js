import {CalendarDateTypes} from '../types';

const initialState = {
  firstDate: null,
  lastDate: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CalendarDateTypes.UPDATE_DATE:
      return {
        ...state,
        ...payload,
      };
    case CalendarDateTypes.UPDATE_DATE_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          ...payload.data,
        },
      };
    case CalendarDateTypes.CLEAN_DATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
