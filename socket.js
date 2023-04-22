
import * as IO from 'socket.io';

export const socket = {};

export function connect(server){
  socket.io = new IO.Server(server);
}