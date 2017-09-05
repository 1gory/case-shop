import express from 'express';
import request from 'request';
import Message from '../../models/message';
import Customer from '../../models/customer';
import auth from '../../connectors/auth';
import lead from '../../connectors/lead';

const router = express.Router();

router.post('/feedback', async (req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const name = req.body.name;
    const customer = await Customer.findOneOrCreate({ phone }, { phone, name });
    await Message.create({
      message: 'Перезвоните мне, пожалуйста',
      customer,
    });
    const cookieJar = request.jar();
    await auth(cookieJar);
    await lead(
      {
        name: 'Запрос обратной связи',
        phone: name,
        custom_fields: [
          {
            id: 428587,
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
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
