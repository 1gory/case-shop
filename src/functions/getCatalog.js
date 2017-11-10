/* eslint no-underscore-dangle: 0 */

import formatProduct from './formatProduct';

export default () => (
  fetch('/api/catalog', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(async (response) => {
    const responseData = await response.json();
    return responseData.result.map(category => ({
      category: category.category,
      categoryRu: category.categoryRu,
      products: category.products.map(product => (formatProduct(product))),
    }));
  }).catch((e) => {
    console.log(e);
  })
);
