export default (category, printCode, resolution, image) =>
  `/product${category ? `/${category}` : ''}/${printCode}/${resolution ? (`${resolution}/`) : ''}${image}`;
