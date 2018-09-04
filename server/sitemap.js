/* eslint no-underscore-dangle: 0 */

import express from 'express';
import sm from 'sitemap';
import Product from './models/product';
import Category from './models/category';
import Article from './models/article';

const router = express.Router();

const getProductUrls = async () => {
  const products = await Product.find({ active: true });
  return products.map(item => ({
    url: item.url ? `/product/${item.url}` : `/product/${item._id}`,
    changefreq: 'weekly',
    priority: 0.5,
  }));
};

const getBlogUrls = async () => {
  const articles = await Article.find({ active: true });
  return articles.map(item => ({
    url: `/blog/${item.url}`,
    changefreq: 'weekly',
    priority: 0.5,
  }));
};

const getCategories = async () => {
  const categories = await Category.find();
  return categories.map(item => ({
    url: `/catalog/${item.name}`,
    changefreq: 'weekly',
    priority: 0.5,
  }));
};

router.get('/sitemap.xml', async (req, res) => {
  const blogUrls = await getBlogUrls();
  const productUrls = await getProductUrls();
  const categoryUrls = await getCategories();
  const sietUrls = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      url: '/gallery',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      url: '/catalog',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      url: '/cooperation',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      url: '/delivery',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: 0.5,
    },
  ];

  const sitemap = sm.createSitemap({
    hostname: 'https://casewood.ru',
    cacheTime: 600000, // 600 sec - cache purge period
    urls: sietUrls.concat(categoryUrls).concat(productUrls).concat(blogUrls),
  });

  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    return res.send(xml);
  });
});

export default router;
