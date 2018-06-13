import express from 'express';
import Product from '../../models/product';

const router = express.Router();

router.param('productUrl', (req, res, next, id) => {
  req.productUrl = id;
  return next();
});

router.param('category', (req, res, next, category) => {
  req.category = category;
  return next();
});

router.get('/products/id/:productUrl', async (req, res, next) => {
  try {
    const product = await Product.find({ url: req.productUrl });
    res.json({
      status: 'success',
      result: product,
    });
  } catch (e) {
    next(e);
  }
});

router.get('/products/:category*?', async (req, res, next) => {
  try {
    const query = { active: true };
    query.category = req.category ? req.category : null;
    const products = await Product.find(query, null, { sort: { order: 1 } });
    res.set({ 'Cache-Control': 'max-age=604800' });
    res.json({
      status: 'success',
      result: products,
    });
  } catch (e) {
    next(e);
  }
});

export default router;
