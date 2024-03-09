import mongoose, { Schema, model } from 'mongoose';

export const blogPostSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  content: { type: Array<any>, required: true },
});

export const BlogPostModel = mongoose.models.Posts || model('Posts', blogPostSchema);