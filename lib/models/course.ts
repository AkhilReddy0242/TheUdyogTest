import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: String,
  duration: String,
  syllabusLink: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
