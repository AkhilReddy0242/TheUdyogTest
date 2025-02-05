import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topics: [{
    type: String,
    required: true,
  }],
  imageUrl: {
    type: String,
    required: true,
  },
  resources: [{
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["pdf", "other"],
      required: true,
    },
  }],
}, {
  timestamps: true,
})

export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema)