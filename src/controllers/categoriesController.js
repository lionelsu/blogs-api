const categoriesService = require('../services/categoriesService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const categoriesController = {
  create: async (req, res) => {
    const { status, data } = await categoriesService.create(req.body);

    return res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = categoriesController;
