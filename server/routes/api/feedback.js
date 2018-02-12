import express from 'express';
// import request from 'request';
import Message from '../../models/message';
import Customer from '../../models/customer';
// import auth from '../../connectors/auth';
// import lead from '../../connectors/lead';
import mailer from '../../services/mailer';

const router = express.Router();

router.post('/feedback', async (req, res, next) => {
  try {
    // const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const customerName = req.body.name;
    const customer = await Customer.findOneOrCreate({ phone }, { phone, customerName });
    await Message.create({
      message: 'Перезвоните мне, пожалуйста',
      customer,
    });
    // const cookieJar = request.jar();
    // await auth(cookieJar);
    // await lead(
    //   {
    //     name: 'Запрос обратной связи',
    //     custom_fields: [
    //       {
    //         id: 247375,
    //         values: [
    //           {
    //             value: ip,
    //           },
    //         ],
    //       },
    //       {
    //         id: 247339,
    //         values: [
    //           {
    //             value: phone,
    //           },
    //         ],
    //       },
    //       {
    //         id: 247265,
    //         values: [
    //           {
    //             value: customerName,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   cookieJar,
    // );
    mailer('Запрос обратной связи', { phone, customerName });
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
