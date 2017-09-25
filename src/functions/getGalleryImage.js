export default (printCode, resolution, image) =>
  `/product/${printCode}/${resolution ? (`${resolution}/`) : ''}${image}`;
