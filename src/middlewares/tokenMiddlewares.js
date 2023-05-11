const valiation = require('../helpers/validateTokens');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const result = await valiation(authorization);
  if (result.type === 401) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.decoded = result;
  return next();
};