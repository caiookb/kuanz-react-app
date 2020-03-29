import {combineReducers} from 'redux';
import InteractionReducer from './InteractionReducer';

export default combineReducers({
  interaction: InteractionReducer,
});
