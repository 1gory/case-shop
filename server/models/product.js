import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
  },
});

export default mongoose.model('Product', ProductSchema, 'product');
