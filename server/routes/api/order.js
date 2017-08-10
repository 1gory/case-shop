import express from 'express';
import request from 'request';
import moment from 'moment';
import Cookies from 'universal-cookie';
import auth from '../../connectors/auth';
import lead from '../../connectors/lead';

const router = express.Router();

router.post('/order', async (req, res, next) => {
  try {
    const cookies = new Cookies(req.headers.cookie);
    const phone = req.body.phone;
    const model = req.body.model;
    const messenger = req.body.messenger;
    const material = req.body.material;
    const image = `http://casewood.ru/${cookies.get('imageUrl')}`;
    const cookieJar = request.jar();
    await auth(cookieJar);
    const date = new Date();
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
