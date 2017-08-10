import request from 'request-promise';

const link = 'https://cswd.amocrm.ru/private/api/v2/json/leads/set';

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
