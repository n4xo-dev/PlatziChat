import * as db from 'mongoose';
import { model } from './model.js';

const dbURI = 'mongodb+srv://n4xo:9808@fcc-mongo-ilopezosa.zmzkq0a.mongodb.net/?retryWrites=true&w=majority';
db.connect(dbURI, {
  useNewUrlParser: true
});
console.log('[db] connected');

function addMessage(message) {
  // list.push(message);
  const myMessage = new model(message);
  myMessage.save();
}

function getMessages() {
  return list;
}

export {
  addMessage as add,
  getMessages as list,
  // get
  // update
  // delete
}