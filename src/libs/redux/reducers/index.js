import {combineReducers} from 'redux';
import InteractionReducer from './InteractionReducer';
import SessionReducer from './SessionReducer';
import IncomesReducer from './IncomesReducer';

export default combineReducers({
  interaction: InteractionReducer,
  session: SessionReducer,
  incomes: IncomesReducer,
});
