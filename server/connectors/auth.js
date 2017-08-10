import request from 'request-promise';

const USER = {
  USER_LOGIN: 'suvenirstudio@ya.ru',
  USER_HASH: '',
};

const link = 'https://cswd.amocrm.ru/private/api/auth.php?type=json';

export default cookie => (
  request.post({
    url: link,
    jar: cookie,
    body: USER,
    json: true,
  })
);
