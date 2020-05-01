const Post = require('../models/Post');
const Comment = require('../models/Comment');

module.exports = (app) => {
    app.post('/posts/:postId/comments', (req, res) => {
        const comment = new Comment(req.body);
        comment.author = req.user._id;

        comment.save()
            .then(comment => {
                return Post.findById(req.params.postId)
            })
            .then(post => {
                post.comments.unshift(comment);
                return post.save();
            })
            .then(post => {
                return res.redirect('/');
            })
            .catch(err => {
                console.log(err);
            })
    })
};
