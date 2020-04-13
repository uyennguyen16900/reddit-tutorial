const Post = require('../models/post');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

};

Post.find({})
  .then(posts => {
    res.render("posts-index", { posts });
  })
  .catch(err => {
    console.log(err.message);
  });

app.get("/posts/:id", function(req, res) {
  // LOOK UP THE POST
  Post.findById(req.params.id)
    .then(post => {
      res.render("posts-show", { post });
    })
    .catch(err => {
      console.log(err.message);
    });
});
