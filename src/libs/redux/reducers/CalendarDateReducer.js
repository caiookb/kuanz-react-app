import {CalendarDateTypes} from '../types';
import moment from 'moment';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  firstDate: moment()
    .startOf('month')
    .format('YYYY-MM-DD'),
  lastDate: moment()
    .endOf('month')
    .format('YYYY-MM-DD'),
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
