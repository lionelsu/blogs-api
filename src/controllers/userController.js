const userService = require('../services/userService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const userController = {
  getAll: async (req, res) => {
    const { status, data } = await userService.getAll();

    res.status(mapStatusHTTP(status)).json(data);
  },

  create: async (req, res) => {
    const { status, data } = await userService.create(req.body);

    res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = userController;
