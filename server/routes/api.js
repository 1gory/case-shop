import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

router.post('/order', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

router.post('/maquette', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

router.post('/image', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

router.post('/feedback', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

router.post('/message', (req, res, next) => {
  try {
    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
