const userService = require('../services/userService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const userController = {
  create: async (req, res) => {
    const { status, data } = await userService.create(req.body);

    res.status(mapStatusHTTP(status)).json(data);
  }
};

module.exports = userController;
