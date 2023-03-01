import express from 'express';
import * as response from '../../network/response.js'

export const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': 'Custom value',
  });
  response.success(req, res, 'Message list');
})

router.post('/', (req, res) => {
  console.log(req.query);
  if (req.query.error)
    response.error(req, res, 'ERROR');
  else
    response.success(req, res, 'Message added', 201);
});

