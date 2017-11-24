import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  material: {
    type: Date,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  messenger: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  customer: [{ type: mongoose.Schema.ObjectId, ref: 'customer' }],
});

export default mongoose.model('Order', OrderSchema, 'order');
