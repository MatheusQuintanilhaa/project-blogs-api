const { User } = require('../../models');

module.exports = async (body) => {
  if (!body.email || !body.password) return { type: 'Some required fields are missing' };

  const result = await User.findOne({ where: { email: body.email, password: body.password } });

  if (!result) return { type: 'Invalid fields' };

  return { type: null };
};