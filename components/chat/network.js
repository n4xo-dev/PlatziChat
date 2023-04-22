import express from 'express';
import * as response from '../../network/response.js';
import * as controller from './controller.js';

export const router = express.Router();

router.get('/', (req, res) => {
  controller.getChats()
    .then(chatList => response.success(req, res, chatList, 200))
    .catch(e => response.error(req, res, 'Error interno', 500, e));
})

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then(chat => response.success(req, res, `Chat created: ${JSON.stringify(chat)}`, 201))
    .catch(e => response.error(req, res, 'Error interno', 500, e));
});

router.patch('/:id', (req, res) => {
  controller.updateChat(req.params.id, req.body.users)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, 'Error interno', 500, e));
})

router.delete('/:id', (req, res) => {
  controller.deleteChat(req.params.id)
    .then(() => response.success(req, res, `Chat ${req.params.id} eliminado`))
    .catch((e) => response.error(req, res, 'Error interno', 500, e))
})
