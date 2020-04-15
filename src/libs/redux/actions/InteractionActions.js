import {InteractionTypes} from '../types';

export const setInfoModal = (detail, data) => ({
  type: InteractionTypes.SET_MODAL_INFO,
  payload: {type: 'info', detail, data},
});

export const closeModal = () => ({
  type: InteractionTypes.CLOSE_MODAL,
  payload: {},
});
