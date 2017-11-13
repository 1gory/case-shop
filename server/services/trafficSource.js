import Source from '../models/source';

export default async (name) => {
  const source = await Source.findOne({ name });
  return source ? source.enum : null;
};
