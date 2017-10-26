import express from 'express';
import request from 'request';
import moment from 'moment';
import auth from '../../connectors/auth';
import lead from '../../connectors/lead';
import { config } from '../../config';

const router = express.Router();

router.post('/order', async (req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const model = req.body.model;
    const referer = req.headers.referer;
    const messenger = req.body.messenger;
    const material = req.body.material;
    const image = req.body.image ? `${config.production.url}/${req.body.image}` : null;
    const cookieJar = request.jar();
    await auth(cookieJar);
    const date = new Date();
    date.setHours(date.getHours() + 3); // TODO fix problem with timezone
    await lead(
      {
        name: `Заказ ${moment().format('HH:mm')}`,
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
        ],
      },
      cookieJar,
    );
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
