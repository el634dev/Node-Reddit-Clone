// controllers/posts.js
const Post = require('../models/post');

module.exports = (app) => {
  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
    post.save(() => res.redirect('/'));
  });

  // ----------------------
  // LOOK UP THE POST
  app.get('/posts/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).lean();
      return res.render('posts-show', { post })
    } catch(err) {
      console.log(err.message);
    }
  });
};
