import request from 'request-promise';
import { amoCrmConfig as config } from '../config';

const link = `https://${config.project}.amocrm.ru/private/api/auth.php?type=json`;

export default cookie => (
  request.post({
    url: link,
    jar: cookie,
    body: {
      USER_LOGIN: config.login,
      USER_HASH: config.hash,
    },
    json: true,
  })
);
