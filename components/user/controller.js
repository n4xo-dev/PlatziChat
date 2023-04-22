import * as store from './store.js';


export function addUser(name) {
  console.group('Controller addUser()');
  if (!name) {
    console.error('[userController] Missing user name');
    return Promise.reject('Incorrect input!');
  }

  const user = { name };

  console.groupEnd('Controller addUser()');
  return store.add(user);
}

export function getUsers() {
  return new Promise((resolve, reject) => resolve(store.list()));
}

export function updateUser(id, name) {
  return new Promise(async (resolve, reject) => {
    if (!id || !name) {
      reject('Invalid data');
      return false;
    }
    const result = await store.update(id, name);
    resolve(result);
  })
}

export function deleteUser(id) {
  return new Promise((resolve, reject) => {
    if (!id){
      reject('Id invalido');
      return;
    }
    store.remove(id)
      .then(() => resolve())
      .catch((e) => reject(e))
  })
}