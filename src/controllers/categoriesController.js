const categoriesService = require('../services/categoriesService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const categoriesController = {
  getAll: async (req, res) => {
    const { status, data } = await categoriesService.getAll();

    return res.status(mapStatusHTTP(status)).json(data);
  },

  create: async (req, res) => {
    const { status, data } = await categoriesService.create(req.body);

    return res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = categoriesController;
