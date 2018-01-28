import express from 'express';
import Category from '../../models/category';
import Product from '../../models/product';

const router = express.Router();

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

    const allCategories = await Category.find(
      { active: true },
      null,
      { sort: { order: 1 } },
    );

    const products = await Product.find(
      { active: true, category: { $in: categories } },
      null,
      { sort: { order: 1 } },
    );

    const groupedProducts = products.reduce((previous, current) => {
      let categoryObj = previous.find(item => (item.category === current.category));
      if (categoryObj === undefined) {
        categoryObj = {
          category: current.category,
          products: [],
        };
        previous.push(categoryObj);
      }
      categoryObj.products.push(current);
      return previous;
    }, []);

    const result = allCategories.map((categoryItem) => {
      const categoryProducts =
        groupedProducts.find(productItem => (productItem.category === categoryItem.name));
      return {
        title: categoryItem.title,
        metaDescription: categoryItem.meta_description,
        category: categoryItem.name,
        categoryRu: categoryItem.name_ru,
        products: categoryProducts.products || [],
      };
    });

    res.json({
      result,
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
