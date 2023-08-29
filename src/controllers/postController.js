const postService = require('../services/postService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const postController = {
  create: async (req, res) => {
    const { status, data } = await postService.create(req.body, req.user);

    return res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = postController;
