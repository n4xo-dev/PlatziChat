import express from 'express';
import * as response from '../../network/response.js';
import * as controller from './controller.js';

export const router = express.Router();

router.get('/', (req, res) => {
  controller.getMessages()
    .then(messageList => response.success(req, res, messageList, 200))
    .catch(err => response.error(req, res, 'err', 500));
})

router.post('/', (req, res) => {
  
  controller.addMessage(req.body.user, req.body.message)
    .then(msg => response.success(req, res, `Message added: ${JSON.stringify(msg)}`, 201))
    .catch(err => response.error(req, res, err, 400));
});

router.post('/persist', (req, res) => {
  controller.persist()
    .then(() => response.success(req, res, 'DONE', 200))
    .catch(() => response.error(req, res, 'NOT DONE', 500));
})

