const service = require('../../services/category/newCategory.service');

module.exports = async (req, res) => {
  const result = await service(req.body.name);

  if (result.type) return res.status(result.type).json({ message: result.message });

  return res.status(201).json(result);
};