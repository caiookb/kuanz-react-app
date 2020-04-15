import {SessionTypes} from '../types';

export const updateSession = (session): Action => ({
  type: SessionTypes.UPDATE_SESSION,
  payload: session,
});

export const updateSessionUserToken = data => ({
  type: SessionTypes.UPDATE_SESSION_FIELD,
  payload: {field: 'userToken', data},
});
