import express from 'express';
import xml from 'xml';
import mailer from '../../services/mailer';
import { config } from '../../config';

const router = express.Router();
const shopId = config.production.yaKassa.shopId;

router.post('/checkUrl', (req, res) => {
  res.set('Content-Type', 'text/xml');

  const response = [{
    checkOrderResponse: {
      _attr: {
        performedDatetime: (new Date()).toISOString(),
        code: 0,
        invoiceId: req.body.invoiceId,
        shopId,
      },
    },
  }];

  res.send(xml(response, { declaration: true }));
});

router.post('/avisoUrl', (req, res) => {
  res.set('Content-Type', 'text/xml');

  const response = [{
    paymentAvisoResponse: {
      _attr: {
        performedDatetime: (new Date()).toISOString(),
        code: 0,
        invoiceId: req.body.invoiceId,
        shopId,
      },
    },
  }];

  mailer('Внесена предоплата', { prepayment: req.body.orderSumAmount, phone: req.body.customerNumber });
  res.send(xml(response, { declaration: true }));
});

export default router;
