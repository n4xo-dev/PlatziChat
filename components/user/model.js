import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
});

export const Model = mongoose.model("User", userSchema);
