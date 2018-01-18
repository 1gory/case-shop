import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  main_image_wood_type: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  active_images_keys: {
    type: [Number],
  },
  description: {
    type: String,
  },
});

export default mongoose.model('Product', ProductSchema, 'product');
