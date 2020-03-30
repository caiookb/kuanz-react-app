import fetchServer from './server';

export const signIn = (body: Object) => {
  return fetchServer({
    method: 'POST',
    path: ['users', 'authenticate'],
    body,
  });
};

export const signUp = (body: Object) => {
  return fetchServer({
    method: 'POST',
    path: ['users', 'create'],
    body,
  });
};
