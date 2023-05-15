const findPostHelper = require('./findPostHelper.js');

module.exports = async () => {
  const posts = await findPostHelper();

  return posts;
};