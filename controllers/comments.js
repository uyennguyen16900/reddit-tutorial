const Post = require('../models/Post');
const Comment = require('../models/Comment');


exports.postNewComment = (req, res) => {
  // INSTANTIATE INSTANCE OF MODEL
  const comment = new Comment(req.body);

  // SAVE INSTANCE OF Comment MODEL TO DB
  comment
    .save()
    .then(comment => {
      return Post.findById(req.params.postId);
    })
    .then(post => {
      post.comments.unshift(comment);
      return post.save();
    })
    .then(post => {
      res.redirect(`/`);
    })
    .catch(err => {
      console.log(err);
    });
};
