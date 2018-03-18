import express from 'express';
import postCalc from '../../services/postCalc';

const router = express.Router();

router.get('/postcalc', async (req, res, next) => {
  try {
    const calcResponse = await postCalc(req.query.toIndex);
    if (calcResponse['Отправления']) {
      const price = calcResponse['Отправления']['Посылка1Класс']['Доставка'];
      const time = calcResponse['Отправления']['Посылка1Класс']['СрокДоставки'];
      res.json({
        time: `${time}`,
        price: Number(parseFloat(price).toFixed(0)) + 20,
        status: 'success',
      });
    } else {
      res.status(500).send('broken index');
    }
  } catch (e) {
    next(e);
  }
});

export default router;
