import * as db from 'mongoose';
import { model } from './model.js';

const dbURI = 'mongodb+srv://n4xo:9808@fcc-mongo-ilopezosa.zmzkq0a.mongodb.net/?retryWrites=true&w=majority';
db.connect(dbURI, {
  useNewUrlParser: true
});
console.log('[db] connected');

function addMessage(message) {
  const myMessage = new model(message);
  myMessage.save();
}

function getMessages(filterUser) {
  let filter = {};
  if (filterUser) {
    filter = { user: filterUser };
  }
  return model.find(filter);
}

export async function updateMessage(id, message) {
  const foundMessage = await model.findOne({ _id: id });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

export {
  addMessage as add,
  getMessages as list,
  // get
  // update
  // delete
}