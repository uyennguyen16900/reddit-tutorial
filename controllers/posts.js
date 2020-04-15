const Post = require('../models/Post');


// GET POST FORM
exports.getNewPostForm = (req, res) => {
  res.render('posts-new', {
    pageTitle: "New Post",
    postsNewActive: true
  })
};

// CREATE POST
exports.postNewPost = (req, res) => {
  const post = new Post(req.body);
  post.save((err, post) => {
    return res.redirect('/');
  })
};

// GET SINGLE POST
exports.getPost = (req, res) => {
  Post.findById(req.params.id).populate('comments')
  .then(post => {
    res.render("posts-show", {
      pageTitle: post.title,
      post: JSON.parse(JSON.stringify(post))
    });
  })
  .catch(err => {
    console.log(err.message);
  });
};

// GET POSTS BY SUBREDDIT
exports.getSubReddit = (req, res) => {
  Post.find({ subreddit: req.params.subreddit })
    .then(posts => {
      res.render("posts-index", {
        pageTitle: req.params.subreddit,
        posts: JSON.parse(JSON.stringify(posts))
       });
    })
    .catch(err => {
      console.log(err);
    });
};
