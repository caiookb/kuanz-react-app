import fetchServer from './server';

export const postIncome = (body, token, firstDate, lastDate) => {
  return fetchServer({
    method: 'POST',
    path: ['incomes', `create?firstDate=${firstDate}&lastDate=${lastDate}`],
    body,
    auth: token,
  });
};

export const getAllIncomes = (firstDate, lastDate, token) => {
  return fetchServer({
    method: 'GET',
    path: ['incomes', `list?firstDate=${firstDate}&lastDate=${lastDate}`],
    body: '',
    auth: token,
  });
};
