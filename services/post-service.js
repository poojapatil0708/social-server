const Post = require('../models/post-model');

exports.createPostService = (query) => {
    return Post.create(query)
    .then(post => {
        if (!post) throw ({ message: 'Error creating post!' });
        else return post;
    })
    .catch(err => { throw err })
}