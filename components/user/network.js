import express from 'express';
import * as response from '../../network/response.js';
import * as controller from './controller.js';

export const router = express.Router();

router.get('/', (req, res) => {
  controller.getUsers()
    .then(usersList => response.success(req, res, usersList, 200))
    .catch(e => response.error(req, res, 'Error interno', 500, e));
})

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then(usr => response.success(req, res, `User created: ${JSON.stringify(usr)}`, 201))
    .catch(e => response.error(req, res, 'Error interno', 500, e));
});

router.patch('/:id', (req, res) => {
  controller.updateUser(req.params.id, req.body.name)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, 'Error interno', 500, e));
})

router.delete('/:id', (req, res) => {
  controller.deleteUser(req.params.id)
    .then(() => response.success(req, res, `Usuario ${req.params.id} eliminado`))
    .catch((e) => response.error(req, res, 'Error interno', 500, e))
})
