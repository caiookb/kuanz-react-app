import {CalendarDateAction} from '../redux/actions';
import moment from 'moment';

export const saveDateOnRedux = (dispatch, item) => {
  const firstDate = moment(item)
    .startOf('month')
    .format('YYYY-MM-DD');
  const lastDate = moment(item)
    .endOf('month')
    .format('YYYY-MM-DD');
  const date = {date: moment(item).format('YYYY-MM-DD'), firstDate, lastDate};
  return dispatch(CalendarDateAction.updateCalendarDate(date));
};
