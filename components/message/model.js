import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String
});

export const Model = mongoose.model("Messages", messageSchema);
