import {SessionTypes} from '../types';

const initialState = {
  user: null,
  metadata: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SessionTypes.UPDATE_SESSION:
      return {
        ...state,
        ...payload,
      };
    case SessionTypes.UPDATE_SESSION_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          ...payload.data,
        },
      };
    case SessionTypes.CLEAN_SESSION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
