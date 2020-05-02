import {SessionTypes} from '../types';

const initialState = {
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
        metadata: payload,
      };
    case SessionTypes.CLEAN_SESSION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
