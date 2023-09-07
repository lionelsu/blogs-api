const userService = require('../services/userService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const userController = {
  getById: async (req, res) => {
    const { id } = req.params;
    const { status, data } = await userService.getById(id);

    res.status(mapStatusHTTP(status)).json(data);
  },

  getAll: async (req, res) => {
    const { status, data } = await userService.getAll();

    res.status(mapStatusHTTP(status)).json(data);
  },

  create: async (req, res) => {
    const { status, data } = await userService.create(req.body);

    res.status(mapStatusHTTP(status)).json(data);
  },

  delete: async (req, res) => {
    const { userId } = req.user;

    const { status } = await userService.delete(userId);

    return res.status(mapStatusHTTP(status)).end();
  },
};

module.exports = userController;
