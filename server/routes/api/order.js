import express from 'express';
import request from 'request';
import moment from 'moment';
import Cookies from 'universal-cookie';
import trafficSource from '../../services/trafficSource';
import auth from '../../connectors/auth';
import lead from '../../connectors/lead';
import mailer from '../../services/mailer';
import { config } from '../../config';

const router = express.Router();
const unassignedEnum = 566419;

router.post('/order', async (req, res, next) => {
  try {
    const cookies = new Cookies(req.headers.cookie);
    const source = cookies.get('source');
    let sourceEnum = await trafficSource(source);
    let note = '';
    if (source && !sourceEnum) {
      sourceEnum = unassignedEnum;
      note += `unassigned utm_source: ${source}`;
    }
    const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const model = req.body.model;
    const referer = req.headers.referer;
    const messenger = req.body.messenger;
    const material = req.body.material;
    const customerName = req.body.customerName ?
      req.body.customerName : `Заказ ${moment().utcOffset('+0300').format('HH:mm')}`;
    const image = req.body.image ? `${config.production.url}/${req.body.image}` : null;
    const cookieJar = request.jar();
    await auth(cookieJar);
    const date = new Date();
    const timezoneOffset = req.body.timezoneOffset;
    date.setHours(date.getHours() + 3); // TODO fix problem with timezone
    await lead(
      {
        name: customerName,
        custom_fields: [
          {
            id: 247265,
            values: [
              {
                value: customerName,
              },
            ],
          },
          {
            id: 247263,
            values: [
              {
                value: date,
              },
            ],
          },
          {
            id: 247339,
            values: [
              {
                value: phone,
              },
            ],
          },
          {
            id: 247271,
            values: [
              {
                value: model,
              },
            ],
          },
          {
            id: 247381,
            values: [
              {
                value: material,
              },
            ],
          },
          {
            id: 247383,
            values: [
              {
                value: messenger,
              },
            ],
          },
          {
            id: 247411,
            values: [
              {
                value: sourceEnum,
              },
            ],
          },
          {
            id: 247323,
            values: [
              {
                value: image,
              },
            ],
          },
          {
            id: 247375,
            values: [
              {
                value: ip,
              },
            ],
          },
          {
            id: 247353,
            values: [
              {
                value: referer,
              },
            ],
          },
          {
            id: 247377,
            values: [
              {
                value: note,
              },
            ],
          },
          {
            id: 247267,
            values: [
              {
                value: timezoneOffset,
              },
            ],
          },
        ],
      },
      cookieJar,
    );
    mailer('Заказ', { phone, model, material, customerName, image, messenger });
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
