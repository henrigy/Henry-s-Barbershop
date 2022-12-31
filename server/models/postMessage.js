import mongoose from 'mongoose';

const currentTime = new Date().toISOString();

const postSchema = mongoose.Schema({
  rating: Number,
  creator: String,
  comment: String,
  createdAt: { type: Date, default: Date },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
