const joiMapStatusHTTP = require('../utils/joiMapStatusHTTP');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const errorMiddleware = (error, req, res, _next) => {
  const { type, message } = error.details[0];

  const statusCode = mapStatusHTTP(joiMapStatusHTTP[type]);

  return res.status(statusCode).json({ message });
};

module.exports = errorMiddleware;
