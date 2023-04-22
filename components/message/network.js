import express from 'express';
import multer from 'multer';
import * as response from '../../network/response.js';
import * as controller from './controller.js';

export const router = express.Router();

const upload = multer({
  dest: 'public/files/',
});

router.get('/', (req, res) => {
  const filterMessages = req.query.chat || null;
  controller.getMessages(filterMessages)
    .then(messageList => response.success(req, res, messageList, 200))
    .catch(err => response.error(req, res, 'err', 500));
})

router.post('/', upload.single('file'), (req, res) => {
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then(msg => response.success(req, res, `Message added: ${JSON.stringify(msg)}`, 201))
    .catch(err => response.error(req, res, err, 400));
});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.text)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, 'Error interno', 500, e));
})

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`))
    .catch((e) => response.error(req, res, 'Error interno', 500, e))
})

router.post('/persist', (req, res) => {
  controller.persist()
    .then(() => response.success(req, res, 'DONE', 200))
    .catch(() => response.error(req, res, 'NOT DONE', 500));
})

