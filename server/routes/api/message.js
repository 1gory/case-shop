import express from 'express';
import request from 'request';
import Message from '../../models/message';
import Customer from '../../models/customer';
import auth from '../../connectors/auth';
import lead from '../../connectors/lead';
import mailer from '../../services/mailer';

const router = express.Router();

router.post('/message', async (req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const message = req.body.message;
    const name = 'new customer';
    const customer = await Customer.findOneOrCreate({ phone }, { phone, name });
    await Message.create({
      message,
      customer,
    });
    const cookieJar = request.jar();
    await auth(cookieJar);
    await lead(
      {
        name: 'Сообщение',
        custom_fields: [
          {
            id: 247339,
            values: [
              {
                value: phone,
              },
            ],
          },
          {
            id: 247921,
            values: [
              {
                value: message,
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
        ],
      },
      cookieJar,
    );
    mailer('Сообщение', { phone });
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
