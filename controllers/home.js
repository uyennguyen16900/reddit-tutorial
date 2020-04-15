const Post = require('../models/Post');


exports.getHome = (req, res) => {
  Post.find({})
    .then(posts => {
      res.render('posts-index', {
        pageTitle: "Home",
        homeActive: true,
        posts: JSON.parse(JSON.stringify(posts))
      });
  })
  .catch(err => {
    console.log(err.message);
  });
};
