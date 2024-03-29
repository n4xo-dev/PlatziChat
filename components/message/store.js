import { Model } from './model.js';

export function add(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

export function list(filterChat) {
  let filter = {};
  if (filterChat) {
    filter = { chat: filterChat };
  }
  return Model.find(filter).populate('user');
}

export async function update(id, message) {
  const foundMessage = await Model.findOne({ _id: id });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

export function remove(id) {
  return Model.deleteOne({
    _id: id
  });
}
