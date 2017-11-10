import express from 'express';
import mongoose from 'mongoose';
import Category from '../../models/category';
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

router.param('category', (req, res, next, category) => {
  req.category = category;
  return next();
});

router.get('/catalog', async (req, res, next) => {
  try {
    const group = await Category.aggregate([
      { $match: { active: true } },
      {
        $group: {
          _id: null,
          categories: { $push: '$name' },
          categoriesRu: { $push: '$name_ru' },
        },
      },
    ]);

    const categories = group[0].categories;
    const categoriesRu = group[0].categoriesRu;

    const products = await Product.find(
      { active: true, category: { $in: categories } },
      null,
      { sort: { order: 1 } },
    );

    const result = products.reduce((previous, current) => {
      let categoryObj = previous.find(item => (item.category === current.category));
      if (categoryObj === undefined) {
        categoryObj = {
          category: current.category,
          categoryRu: categoriesRu[categories.indexOf(current.category)],
          products: [],
        };
        previous.push(categoryObj);
      }
      categoryObj.products.push(current);
      return previous;
    }, []);

    res.json({
      result,
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
