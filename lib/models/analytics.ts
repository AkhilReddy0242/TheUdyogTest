import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: () => new Date().setHours(0, 0, 0, 0),
  },
  userCount: {
    type: Number,
    required: true,
    default: 0,
  },
  newUsers: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
});

// Index for efficient date queries
analyticsSchema.index({ date: 1 });

export const Analytics = mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema);