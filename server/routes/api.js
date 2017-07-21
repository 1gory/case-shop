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
  res.json({});
  next();
});

router.post('/maquette', (req, res, next) => {
  res.json({});
  next();
});

router.post('/image', (req, res, next) => {
  res.json({
    status: 'success',
  });
  next();
});

router.post('/feedback', (req, res, next) => {
  res.json({
    status: 'success',
  });
  next();
});

router.post('/message', (req, res, next) => {
  res.json({
    status: 'success',
  });
  next();
});

module.exports = router;
