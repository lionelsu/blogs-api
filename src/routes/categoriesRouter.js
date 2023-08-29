const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateSchema = require('../utils/validateSchema');

const categoriesRouter = Router();

categoriesRouter.post(
'/', 
authMiddleware,
validateSchema.createCategory, 
categoriesController.create,
);

module.exports = categoriesRouter;
