import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

export const Model = mongoose.model("Messages", messageSchema);
