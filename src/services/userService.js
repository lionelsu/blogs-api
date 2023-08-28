const { User } = require('../models');
const { generateToken } = require('../auth/jwt');

const userService = {
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
};

module.exports = userService;
