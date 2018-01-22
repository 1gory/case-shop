import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  url: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  short_description: {
    type: String,
  },
  content: {
    type: String,
  },
  create_date: {
    type: Date,
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
});

export default mongoose.model('Article', ArticleSchema, 'article');
