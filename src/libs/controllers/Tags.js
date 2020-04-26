import {Tags} from '../server';
import {StoreController} from '../controllers';
import {TagsActions} from '../redux/actions';

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

export const createTag = data => {
  const dispatch = StoreController.dispatch();
  const token = StoreController.getUserToken();
  return Tags.createTag({name: data}, token)
    .then(res => {
      if (!res.error) {
        saveSpendingsOnRedux(dispatch, res);
      }
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const getAllTags = async dispatch => {
  const token = StoreController.getUserToken();
  return Tags.getTags(token)
    .then(tags => {
      console.log('TAGGGGGGGGS', tags);
      saveSpendingsOnRedux(dispatch, tags);
    })
    .catch(err => {
      console.log('Erro no getAllTags', err);
    });
};

export const saveSpendingsOnRedux = (dispatch, tags) => {
  console.log('TAGS NO ACTION', tags);
  return dispatch(TagsActions.updateTags(tags));
};
