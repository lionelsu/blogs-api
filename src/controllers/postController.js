const postService = require('../services/postService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const postController = {
  getAll: async (req, res) => {
    const { status, data } = await postService.getAll();

    return res.status(mapStatusHTTP(status)).json(data);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const { status, data } = await postService.getById(id);

    return res.status(mapStatusHTTP(status)).json(data);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
    const { status, data } = await postService.update(id, userId, req.body);

    return res.status(mapStatusHTTP(status)).json(data);
  },

  create: async (req, res) => {
    const { status, data } = await postService.create(req.body, req.user);

    return res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = postController;
