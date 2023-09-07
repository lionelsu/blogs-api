/* eslint-disable max-lines */
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

const getPostFormat = {
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
};

const postService = {
  getAll: async () => {
    const result = await BlogPost.findAll({
      ...getPostFormat,
    });

    return { status: 'SUCCESSFUL', data: result };
  },

  getById: async (id) => {
    const result = await BlogPost.findByPk(id, {
      ...getPostFormat,
    });

    if (!result) {
      return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
    }

    return { status: 'SUCCESSFUL', data: result };
  },

  update: async (postId, userId, post) => {
    const { data } = await postService.getById(postId);

    if (data.userId !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
    }

    await BlogPost.update({ ...post }, { where: { id: postId } });

    return postService.getById(postId);
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

  delete: async (postId, userId) => {
    const { status, data } = await postService.getById(postId);
  
    if (status === 'NOT_FOUND') {
      return { status, data };
    }
  
    if (data.userId !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
    }
  
    await BlogPost.destroy({ where: { id: postId } });
  
    return { status: 'DELETED' };
  },
};

module.exports = postService;
