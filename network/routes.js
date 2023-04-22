import * as message from '../components/message/network.js';
import * as user from '../components/user/network.js';
import * as chat from '../components/chat/network.js';

export function router(server) {
  server.use('/message', message.router);
  server.use('/user', user.router);
  server.use('/chat', chat.router);
}