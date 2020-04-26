import {SessionActions} from '../redux/actions';

export const saveSession = (dispatch, session) => {
  return dispatch(SessionActions.updateSession(session));
};

export const saveUserToken = (dispatch, token) => {
  return dispatch(SessionActions.updateSessionUserToken(token));
};
