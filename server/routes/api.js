import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.post('/order', function(req, res, next) {
  res.json({});
});

router.post('/maquette', function(req, res, next) {
  res.json({});
});

router.post('/image', (req, res, next) => {
  res.json({
    status: 'success'
  });
});

router.post('/feedback', (req, res, next) => {
  res.json({
    status: 'success'
  });
});

router.post('/message', (req, res, next) => {
  res.json({
    status: 'success'
  });
});

module.exports = router;
