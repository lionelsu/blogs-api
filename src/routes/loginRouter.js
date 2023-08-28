const { Router } = require('express');
const loginController = require('../controllers/loginController');
const validateSchema = require('../utils/validateSchema');

const loginRouter = Router();

loginRouter.post('/', validateSchema.loginField, loginController.login);

module.exports = loginRouter;
