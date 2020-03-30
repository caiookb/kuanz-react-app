const serverErr = res => {
  switch (res.status) {
    case 400:
      return res.json().then(response => response);
    case 500:
      return Promise.reject(Error('Ocorreu um erro no servidor!'));
    default:
      return Promise.reject(
        Error('Algo deu errado! Tente novamente mais tarde'),
      );
  }
};

const domain = {
  LOCAL: 'http://192.168.0.103:5000/',
};

const urlPrefix = domain.LOCAL;

const url = path => {
  return urlPrefix.concat(path.join('/'));
};

export default async config => {
  const {method, path, body, authToken} = config;
  const opt = {
    headers: {
      Auth: authToken,
      'Content-Type': 'application/json',
    },
    method,
    body: body && JSON.stringify(body),
  };

  return fetch(url(path), opt)
    .then(res => (res.ok ? res.json() : serverErr(res)))
    .catch(err => Promise.reject(err));
};
