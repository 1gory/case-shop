import request from 'request-promise';
import { amoCrmConfig } from '../config';

const link = `https://${amoCrmConfig.project}.amocrm.ru/private/api/v2/json/leads/set`;

export default (data, cookie) => (
  request.post({
    url: link,
    jar: cookie,
    body: {
      request: {
        leads: {
          add: [
            data,
          ],
        },
      },
    },
    json: true,
  })
);
