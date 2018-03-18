import request from 'request-promise';

const from = '127106';
const weight = 80;
const valuation = 0;
const country = 'RU';
const charset = 'utf-8';
const site = 'casewood.ru';
const email = 'store@casewood.ru'; // limit info
const output = 'JSON';

export default toIndex => (
  request({
    url: 'http://api.postcalc.ru/',
    gzip: true,
    qs: {
      f: from,
      t: toIndex,
      w: weight,
      v: valuation,
      c: country,
      o: output,
      cs: charset,
      st: site,
      ml: email,
    },
    json: true,
  })
);
