import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  customer: [{ type: mongoose.Schema.ObjectId, ref: 'customer' }],
});

MessageSchema.index({ name: 1 }, { unique: false, sparse: false });

export default mongoose.model('Message', MessageSchema, 'message');
