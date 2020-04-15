import {combineReducers} from 'redux';
import InteractionReducer from './InteractionReducer';
import SessionReducer from './SessionReducer';

export default combineReducers({
  interaction: InteractionReducer,
  session: SessionReducer,
});
