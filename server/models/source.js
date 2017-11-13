import mongoose from 'mongoose';

const SourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nameRu: {
    type: String,
    required: true,
  },
  enum: {
    type: Number,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Source', SourceSchema, 'source');
