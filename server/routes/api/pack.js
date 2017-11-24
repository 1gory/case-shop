import express from 'express';
import mongoose from 'mongoose';
import Pack from '../../models/pack';
import Product from '../../models/product';

const router = express.Router();

router.param('packName', (req, res, next, id) => {
  req.packName = id;
  return next();
});

router.get('/pack/:packName', async (req, res, next) => {
  try {
    const packs = await Pack.find({ $or: [{ name: req.packName }, { name: 'default' }] });
    const pack = packs.pop();
    const collection = await Product.find({ _id: {
      $in: pack.ids.map(id => (mongoose.Types.ObjectId(id))),
    } });
    res.json({
      status: 'success',
      result: {
        pack,
        collection,
      },
    });
  } catch (e) {
    next(e);
  }
});

export default router;
