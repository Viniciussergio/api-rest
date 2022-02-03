import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, userController.store);

router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> apaga um usuário
show -> mostra um usuário
update -> atualiza um usuário
*/
