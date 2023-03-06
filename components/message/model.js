import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

export const model = mongoose.model("Messages", messageSchema);
