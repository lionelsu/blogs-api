const { User, BlogPost, Category, PostCategory, sequelize } = require('../models');

const createPost = async (post, userId, transaction) => {
  const addPost = await BlogPost.create({
    ...post,
    userId,
    updated: new Date(),
    published: new Date(),
  }, { transaction });

  return addPost;
};

const createPostCategories = async (postId, categoryIds, transaction) => {
  const postCategories = categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));

  await PostCategory.bulkCreate(postCategories, { transaction });
};

const postService = {
  getAll: async () => {
    const result = await BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: 'password' },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });

    return { status: 'SUCCESSFUL', data: result };
  },

  create: async (post, user) => {
    try {
      const { userId } = user;
      const { categoryIds } = post;

      const result = await sequelize.transaction(async (t) => {
        const addPost = await createPost(post, userId, t);
        await createPostCategories(addPost.id, categoryIds, t);

        return addPost;
      });
  
      return { status: 'CREATED', data: result };
    } catch (error) {
      return { 
        status: 'BAD_REQUEST', 
        data: { message: 'one or more "categoryIds" not found' } };
    }
  },
};

module.exports = postService;
