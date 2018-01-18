import express from 'express';
import mongoose from 'mongoose';
import Product from '../../models/product';

const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

router.param('productId', (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    req.productUrl = id;
  } else {
    req.productId = id;
  }
  return next();
});

router.param('category', (req, res, next, category) => {
  req.category = category;
  return next();
});

router.get('/products/id/:productId', async (req, res, next) => {
  try {
    const product = req.productId ?
      await Product.find({ _id: ObjectId(req.productId) }) :
      await Product.find({ url: req.productUrl });
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
    res.json({
      status: 'success',
      result: products,
    });
  } catch (e) {
    next(e);
  }
});

export default router;
