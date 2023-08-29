const { Category } = require('../models');

const categoriesService = {
  getAll: async () => {
    const result = await Category.findAll({
      order: [['id', 'ASC']],
    });

    return { status: 'SUCCESSFUL', data: result };
  },

  create: async (category) => {
    try {
      const { name } = category;
      const addCategory = await Category.create({ name });

      return { status: 'CREATED', data: addCategory };
    } catch (error) {
      return { status: 'CONFLICT', data: { message: 'Category already registered' } };
    }
  },
};

module.exports = categoriesService;
