import { socket } from '../../socket.js';
import * as store from './store.js';

export function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    console.group('Controller addMessage()');
    
    if (!chat || !user || !message) {
      console.error('[messageController] Missing user or message');
      reject('Incorrect input!');
      return false;
    }

    const fileUrl = (file)
      ? 'http://localhost:3000/app/files/' + file.filename
      : undefined;
  
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
    };
  
    store.add(fullMessage);

    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
    console.groupEnd('Controller addMessage()');
  })
}

export function getMessages(filterChat) {
  return store.list(filterChat);
}

export function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.update(id, message);
    resolve(result);
  })
}

export function deleteMessage(id) {
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

export function persist() {
  return new Promise((resolve, reject) => resolve(store.persist()));
}