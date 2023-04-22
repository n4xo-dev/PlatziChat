import { Model } from './model.js';

export function add(user) {
  const myUser = new Model(user);
  return myUser.save();
}

export function list() {
  return Model.find();
}

export async function update(id, name) {
  const foundUser = await Model.findOne({ _id: id });

  foundUser.name = name;
  const newUser = await foundUser.save();
  return newUser;
}

export function remove(id) {
  return Model.deleteOne({
    _id: id
  });
}
