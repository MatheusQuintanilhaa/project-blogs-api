const service = require('../../services/user/getAllUsers.service');

module.exports = async (req, res) => {
  const result = await service();
  res.status(200).json(result);
};