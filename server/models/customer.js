import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
});

CustomerSchema.index({ phone: 1 }, { unique: false, sparse: false });

CustomerSchema.statics.findOneOrCreate = async function (condition, doc) {
  const self = this;
  const found = await self.findOne(condition);
  if (found) {
    return found;
  }
  return self.create(doc);
};

export default mongoose.model('Customer', CustomerSchema, 'customer');
