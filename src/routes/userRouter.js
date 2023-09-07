const { Router } = require('express');
const userController = require('../controllers/userController');
const validateSchema = require('../utils/validateSchema');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = Router();

userRouter.get('/', authMiddleware, userController.getAll);
userRouter.get('/:id', authMiddleware, userController.getById);
userRouter.post('/', validateSchema.createUser, userController.create);
userRouter.delete('/me', authMiddleware, userController.delete);

module.exports = userRouter;
