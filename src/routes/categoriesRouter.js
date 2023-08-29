const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const auth = require('../middlewares/authMiddleware');
const validate = require('../utils/validateSchema');

const categoriesRouter = Router();

categoriesRouter.get('/', auth, categoriesController.getAll);
categoriesRouter.post('/', auth, validate.createCategory, categoriesController.create);

module.exports = categoriesRouter;
