import { Router } from 'express';
import UserController from './userController';

const router = Router();

const userController = new UserController();

router.get('/');
router.get('/:id');
router.post('/', userController.createUser);
router.put('/:id');
router.delete('/:id');

export default router;
