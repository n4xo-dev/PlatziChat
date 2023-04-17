import * as store from './store.js';


export function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    console.group('Controller addMessage()');
    
    if (!user || !message) {
      console.error('[messageController] Missing user or message');
      reject('Incorrect input!');
      return false;
    }
  
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
  
    store.add(fullMessage);

    resolve(fullMessage);
    console.groupEnd('Controller addMessage()');
  })

}

export function getMessages(filterUser) {
  return new Promise((resolve, reject) => resolve(store.list(filterUser)));
}

export function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.updateMessage(id, message);
    resolve(result);
  })
}

export function persist() {
  return new Promise((resolve, reject) => resolve(store.persist()));
}