const serverErr = res => {
  switch (res.status) {
    case 400:
      return res.json().then(response => response);
    case 500:
      return res.json().then(response => response);
    default:
      return res.json().then(response => response);
  }
};

const domain = {
  DEV: 'https://guarded-peak-67914.herokuapp.com/',
  LOCAL: 'http://192.168.42.115:5000/',
};

const urlPrefix = domain.DEV;

const url = path => {
  return urlPrefix.concat(path.join('/'));
};

export default config => {
  const {method, path, body, auth} = config;
  const opt = {
    headers: {
      auth: auth,
      'Content-Type': 'application/json',
    },
    method,
    body: body && JSON.stringify(body),
  };
  return fetch(url(path), opt)
    .then(res => (res.ok ? res.json() : serverErr(res)))
    .catch(err => Promise.reject(err));
};
