const service = require('../../services/post/getPost.service');

module.exports = async (req, res) => {
  const result = await service();
  res.status(200).json(result);
};