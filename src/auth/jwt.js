const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '24h',
};

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const decodeToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  extractToken,
  decodeToken,
};
