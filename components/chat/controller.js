import * as store from './store.js';


export function addChat(users) {
  console.group('Controller addChat()');
  if (!users) {
    console.error('[chatController] Missing users');
    return Promise.reject('Incorrect input!');
  }

  const chat = { users };

  console.groupEnd('Controller addChat()');
  return store.add(chat);
}

export function getChats(userId) {
  return new Promise((resolve, reject) => resolve(store.list(userId)));
}

export function updateChat(id, users) {
  return new Promise(async (resolve, reject) => {
    if (!id || !users) {
      reject('Invalid data');
      return false;
    }
    const result = await store.update(id, users);
    resolve(result);
  })
}

export function deleteChat(id) {
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