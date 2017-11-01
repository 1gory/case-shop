export default (printCode, resolution, turning, woodType, background, category) =>
  `/product${category ? `/${category}` : ''}/${printCode}/${resolution}/${printCode}_${turning}_${woodType}_${background}.jpg`;
