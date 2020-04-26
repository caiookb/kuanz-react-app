import {CalendarDateTypes} from '../types';

export const updateCalendarDate = (spendings): Action => ({
  type: CalendarDateTypes.UPDATE_DATE,
  payload: spendings,
});

export const updateSCalendarDateField = (field, data) => ({
  type: CalendarDateTypes.UPDATE_DATE_FIELD,
  payload: {field: field, data},
});
