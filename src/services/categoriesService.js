const { Category } = require('../models');

const categoriesService = {
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
