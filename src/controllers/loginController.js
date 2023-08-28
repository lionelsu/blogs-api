const loginService = require('../services/loginService');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const { status, data } = await loginService.login(email, password);

    res.status(mapStatusHTTP(status)).json(data);
  },
};

module.exports = loginController;
