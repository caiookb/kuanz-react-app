import fetchServer from './server';

export const createDefaultTags = token => {
  return fetchServer({
    method: 'POST',
    path: ['tags', 'createDefaultTags'],
    body: '',
    auth: token,
  });
};

export const getTags = token => {
  return fetchServer({
    method: 'GET',
    path: ['tags', 'list'],
    body: '',
    auth: token,
  });
};

export const createTag = (body, token) => {
  return fetchServer({
    method: 'POST',
    path: ['tags', `create`],
    body,
    auth: token,
  });
};

export const deleteTag = (body, token) => {
  return fetchServer({
    method: 'POST',
    path: ['tags', `delete`],
    body,
    auth: token,
  });
};
