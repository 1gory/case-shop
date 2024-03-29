/* eslint no-underscore-dangle: 0 */

export default product => ({
  id: product._id,
  name: product.name,
  category: product.category,
  woodType: product.main_image_wood_type,
  printCode: product.print_code,
  activeImagesKeys: product.active_images_keys,
  images: product.images,
  productImages: product.product_images,
  price: product.price,
  description: product.description,
  metaDescription: product.meta_description,
  title: product.title,
  url: product.url,
});
