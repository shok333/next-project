import mongoose, { Schema, model } from 'mongoose';

export const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  provider: { type: String },
  dateTime: { type: String, required: true },
});

export const UserModel = mongoose.models.Users || model('Users', userSchema);