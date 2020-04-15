import {SessionActions} from '../redux/actions';

export const saveSession = (dispatch, session) => {
  return dispatch(SessionActions.updateSession(session));
};
