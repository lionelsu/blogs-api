const { User } = require('../models');
const { generateToken } = require('../auth/jwt');

const userService = {
  getById: async (id) => {
    const result = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!result) {
      return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
    }

    return { status: 'SUCCESSFUL', data: result };  
  },

  getAll: async () => {
    const result = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    return { status: 'SUCCESSFUL', data: result };
  },

  create: async (user) => {
    try {
      await User.create({ ...user });

      const { email } = user;
      const token = generateToken({ email });

      return { status: 'CREATED', data: { token } };
    } catch (error) {
      return { status: 'CONFLICT', data: { message: 'User already registered' } };
    }
  },

  delete: async (id) => {
    await User.destroy({ where: { id } });

    return { status: 'DELETED' };
  },
};

module.exports = userService;
