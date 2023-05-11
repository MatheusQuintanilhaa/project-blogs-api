const { Category, BlogPost, PostCategory } = require('../../models');

const verifyIds = async (array) => {
  const existsId = await Category.findAndCountAll({
    where: {
      id: array,
    },
  });

  if (existsId.count !== array.length || array.length === 0) {
    return { type: 'erro' };
  }

  return true;
};

const addPost = async (title, content, userId) => {
  const posts = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  return posts;
};

const addPostCategories = (postId, categoryIds) => {
  try {
    categoryIds.forEach(async (categoryId) => {
      await PostCategory.create({ postId, categoryId });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = async ({ title, content, categoryIds }, userId) => {
  if (!title || !content || !categoryIds) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  const verifyResult = await verifyIds(categoryIds);

  if (verifyResult.type) return { type: 400, message: 'one or more "categoryIds" not found' };

  const posts = await addPost(title, content, userId);
  addPostCategories(posts.null, categoryIds);

  posts.id = posts.null;

  return posts;
};