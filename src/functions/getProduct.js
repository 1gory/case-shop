/* eslint no-underscore-dangle: 0 */

export default url => (
  fetch(`/api/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(async (response) => {
    const responseData = await response.json();

    return responseData.result.map(product => ({
      id: product._id,
      name: product.name,
      category: product.category,
      woodType: product.main_image_wood_type,
      printCode: product.print_code,
      activeImagesKeys: product.active_images_keys,
      images: product.images,
      price: product.price,
      description: product.description,
    }));
  }).catch((e) => {
    console.log(e);
  })
);
