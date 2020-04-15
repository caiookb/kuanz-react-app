// @flow
import {InteractionTypes} from '../types';

const initialState = {
  modal: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case InteractionTypes.SET_MODAL_INFO:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
        },
      };
    case InteractionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};
