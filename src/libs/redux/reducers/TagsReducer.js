import {TagTypes} from '../types';

const initialState = {
  tags: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case TagTypes.UPDATE_TAG:
      return {
        ...state,
        ...payload,
      };
    case TagTypes.UPDATE_TAG_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          ...payload.data,
        },
      };
    case TagTypes.CLEAN_TAG:
      return {
        ...state,
      };
    default:
      return state;
  }
};
