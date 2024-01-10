const Post = require('../models/post-model');

exports.createPostService = (data) => {
    return Post.create(data)
        .then(post => {
            if (!post) throw ({ message: 'Error creating post!' });
            else return post;
        })
        .catch(err => { throw err })
}

exports.getPostService = (query) => {
    return Post.find(query)
        .then(post => { return post })
        .catch(err => { throw err })
}

exports.deletePostService = (query) => {
    return Post.deleteMany(query)
        .then(res => res)
        .catch(err => { throw err })
}