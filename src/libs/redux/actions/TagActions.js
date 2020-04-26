import {TagTypes} from '../types';

export const updateTags = (tags): Action => ({
  type: TagTypes.UPDATE_TAG,
  payload: tags,
});

export const updateTagsField = (field, data) => ({
  type: TagTypes.UPDATE_TAG_FIELD,
  payload: {field: field, data},
});
