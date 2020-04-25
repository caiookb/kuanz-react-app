import fetchServer from './server';

export const postSpending = (body, token, firstDate, lastDate) => {
  return fetchServer({
    method: 'POST',
    path: ['spending', `create?firstDate=${firstDate}&lastDate=${lastDate}`],
    body,
    auth: token,
  });
};

export const getAllSpendings = (firstDate, lastDate, token) => {
  return fetchServer({
    method: 'GET',
    path: ['spending', `list?firstDate=${firstDate}&lastDate=${lastDate}`],
    body: '',
    auth: token,
  });
};
