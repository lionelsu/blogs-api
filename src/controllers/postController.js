const postService = require('../services/postService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const postController = {
  getAll: async (req, res) => {
    const { status, data } = await postService.getAll();

    return res.status(mapStatusHTTP(status)).json(data);
  },

  create: async (req, res) => {
    const { status, data } = await postService.create(req.body, req.user);

    return res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = postController;
