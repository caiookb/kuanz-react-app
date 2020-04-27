import {combineReducers} from 'redux';
import InteractionReducer from './InteractionReducer';
import SessionReducer from './SessionReducer';
import IncomesReducer from './IncomesReducer';
import SpendingsReducer from './SpendingsReducer';
import CalendarReducer from './CalendarDateReducer';
import TagsReducer from './TagsReducer';
import GoalsReducer from './GoalsReducer';

export default combineReducers({
  interaction: InteractionReducer,
  session: SessionReducer,
  incomes: IncomesReducer,
  spendings: SpendingsReducer,
  calendarDate: CalendarReducer,
  tag: TagsReducer,
  GoalsReducer: GoalsReducer,
});
