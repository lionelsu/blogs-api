const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');
const validateSchema = require('../utils/validateSchema');

const postRouter = Router();

postRouter.get('/', authMiddleware, postController.getAll);
postRouter.get('/:id', authMiddleware, postController.getById);
postRouter.put('/:id', authMiddleware, validateSchema.updatePost, postController.update);
postRouter.post('/', authMiddleware, validateSchema.createPost, postController.create);
postRouter.delete('/:id', authMiddleware, postController.delete);

module.exports = postRouter;
