export default (printCode, resolution, turning, woodType, background) =>
  `/product/${printCode}/${resolution}/${printCode}_${turning}_${woodType}_${background}.jpg`;
