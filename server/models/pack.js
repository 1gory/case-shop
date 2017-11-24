import mongoose from 'mongoose';

const PackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sign: {
    type: String,
    required: true,
  },
  ids: {
    type: Array,
    required: true,
  },
  banner: {
    type: String,
    required: false,
  },
});

export default mongoose.model('Pack', PackSchema, 'pack');
