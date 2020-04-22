import fetchServer from './server';

export const postSpending = (body, token) => {
  return fetchServer({
    method: 'POST',
    path: ['spending', 'create'],
    body,
    auth: token,
  });
};

export const getAllSpendings = token => {
  return fetchServer({
    method: 'GET',
    path: ['spending', 'list'],
    body: '',
    auth: token,
  });
};
