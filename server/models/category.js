import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  name_ru: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  meta_description: {
    type: String,
  },
  order: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Category', CategorySchema, 'category');
