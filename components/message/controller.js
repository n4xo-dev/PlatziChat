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

export function getMessages() {
  return new Promise((resolve, reject) => resolve(store.list()));
}

export function persist() {
  return new Promise((resolve, reject) => resolve(store.persist()));
}