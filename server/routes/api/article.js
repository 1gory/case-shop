import express from 'express';
import Article from '../../models/article';

const router = express.Router();

router.param('articleName', (req, res, next, articleName) => {
  req.articleName = articleName;
  return next();
});

router.get('/articles/:articleName*?', async (req, res, next) => {
  try {
    const query = { active: true };
    if (req.articleName) {
      query.url = req.articleName;
    }

    const articles = await Article.find(query, null, { sort: { order: -1 } });
    res.set({ 'Cache-Control': 'max-age=604800' });
    res.json({
      status: 'success',
      result: articles,
    });
  } catch (e) {
    next(e);
  }
});

export default router;
