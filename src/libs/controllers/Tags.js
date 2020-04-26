import {Tags} from '../server';
import {StoreController} from '../controllers';

export const createDefaultTags = token => {
  return Tags.createDefaultTags(token)
    .then(res => {
      console.log('CRIOU AS DEFAULT TAG PORRA');
      return res;
    })
    .catch(err => {
      console.log('ERRO AO CRIAR AS DEFAULT TAG CARAIO');
      return err;
    });
};

export const getAllTags = async dispatch => {
  const token = StoreController.getUserToken();
  return Tags.getTags(token)
    .then(tags => {
      saveSpendingsOnRedux(dispatch, tags);
    })
    .catch(err => {
      console.log('Erro no getAllTags', err);
    });
};

export const saveSpendingsOnRedux = (dispatch, spendings) => {
  return dispatch(SpendingsActions.updateSpendings(spendings));
};
