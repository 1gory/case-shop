/* eslint no-underscore-dangle: 0 */

import express from 'express';
import sm from 'sitemap';
import Product from './models/product';

const router = express.Router();

const getUrls = async () => {
  const products = await Product.find({ active: true });
  return products.map(item => ({
    url: item.url ? `/product/${item.url}` : `/product/${item._id}`,
    changefreq: 'weekly',
    priority: 0.5,
  }));
};

router.get('/sitemap.xml', async (req, res) => {
  const productUrls = await getUrls();
  const sietUrls = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 0.5,
    }, {
      url: '/gallery',
      changefreq: 'weekly',
      priority: 0.5,
    }, {
      url: '/catalog',
      changefreq: 'weekly',
      priority: 0.5,
    }, {
      url: '/cooperation',
      changefreq: 'weekly',
      priority: 0.5,
    }, {
      url: '/delivery',
      changefreq: 'weekly',
      priority: 0.5,
    }];

  const sitemap = sm.createSitemap({
    hostname: 'https://casewood.ru',
    cacheTime: 600000, // 600 sec - cache purge period
    urls: sietUrls.concat(productUrls),
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
