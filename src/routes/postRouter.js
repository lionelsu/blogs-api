const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');
const validateSchema = require('../utils/validateSchema');

const postRouter = Router();

postRouter.post('/', authMiddleware, validateSchema.createPost, postController.create);

module.exports = postRouter;
