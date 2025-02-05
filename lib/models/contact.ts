import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phone:{
    type: Number
  },
  status: {
    type: String,
    enum: ['new', 'inProgress', 'resolved'],
    default: 'new',
  },
}, {
  timestamps: true,
});

export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);