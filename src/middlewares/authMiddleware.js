const { extractToken, decodeToken } = require('../auth/jwt');

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = extractToken(bearerToken);

    const payload = decodeToken(token);
    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
