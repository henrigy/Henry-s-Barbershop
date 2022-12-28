import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  rating: Number,
  creator: String,
  comment: String,
  createdAt: { type: Date, default: new Date() },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
