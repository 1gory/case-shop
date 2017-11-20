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
const unassignedEnum = 815981;

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
            id: 386299,
            values: [
              {
                value: date,
              },
            ],
          },
          {
            id: 386315,
            values: [
              {
                value: phone,
              },
            ],
          },
          {
            id: 386353,
            values: [
              {
                value: model,
              },
            ],
          },
          {
            id: 386225,
            values: [
              {
                value: material,
              },
            ],
          },
          {
            id: 386367,
            values: [
              {
                value: messenger,
              },
            ],
          },
          {
            id: 386295,
            values: [
              {
                value: sourceEnum,
              },
            ],
          },
          {
            id: 407505,
            values: [
              {
                value: image,
              },
            ],
          },
          {
            id: 428587,
            values: [
              {
                value: ip,
              },
            ],
          },
          {
            id: 434443,
            values: [
              {
                value: referer,
              },
            ],
          },
          {
            id: 440641,
            values: [
              {
                value: note,
              },
            ],
          },
          {
            id: 441251,
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
    mailer('Заказ', { phone, model, material, customerName });
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
