import express from 'express';
import mongoose from 'mongoose';
import Product from '../../models/product';

const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

router.param('productId', (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new Error('NotFoundException'));
  }
  req.productId = id;
  return next();
});

router.get('/products', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({
      status: 'success',
      result: products,
    });
  } catch (e) {
    next(e);
  }
});

router.get('/products/:productId', async (req, res, next) => {
  try {
    const product = await Product.find({ _id: ObjectId(req.productId) });
    res.json({
      status: 'success',
      result: product,
    });
  } catch (e) {
    next(e);
  }
});

export default router;
