import {GoalsTypes} from '../types';

const initialState = {
  goals: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GoalsTypes.UPDATE_GOALS:
      return {
        ...state,
        ...payload,
      };
    case GoalsTypes.UPDATE_GOALS_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          ...payload.data,
        },
      };
    case GoalsTypes.CLEAN_GOALS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
