import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  path: {
    type: String,
  },
  product: {
    type: Object,
    ref: 'Product',
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  create_date: {
    type: Date,
  },
});

export default mongoose.model('Photo', PhotoSchema, 'photo');
