import express from 'express';
import * as response from '../../network/response.js';
import * as controller from './controller.js';

export const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': 'Custom value',
  });
  response.success(req, res, 'Message list');
})

router.post('/', (req, res) => {
  
  controller.addMessage(req.body.user, req.body.message)
    .then((msg) => response.success(req, res, `Message added: ${JSON.stringify(msg)}`, 201))
    .catch((err) => response.error(req, res, err, 400));
});

