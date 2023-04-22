import { Model } from './model.js';

export function add(users) {
  const myChat = new Model(users);
  return myChat.save();
}

export function list() {
  return Model.find().populate('users');
}

export async function update(id, users) {
  const foundChat = await Model.findOne({ _id: id });

  foundChat.users = users;
  const newChat = await foundChat.save();
  return newChat;
}

export function remove(id) {
  return Model.deleteOne({
    _id: id
  });
}
