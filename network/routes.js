import express from 'express';
import * as message from '../components/message/network.js';

export function router(server) {
  server.use('/message', message.router);
}