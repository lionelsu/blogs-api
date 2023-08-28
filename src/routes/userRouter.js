const { Router } = require('express');
const userController = require('../controllers/userController');
const validateSchema = require('../utils/validateSchema');

const userRouter = Router();

userRouter.post('/', validateSchema.createUser, userController.create);

module.exports = userRouter;
