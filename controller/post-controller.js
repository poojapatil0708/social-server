const { status } = require("../constants")
const { createPostService, getPostService } = require("../services/post-service")

exports.createPostController = (req, res) => {
    createPostService(req.body)
        .then(newPost => res.status(status.OK).send(newPost))
        .catch(err => res.status(status.BAD_REQUEST).send({err, message:'Error creating post'}))
}

exports.getPostController = (req,res) => {
    getPostService({user: req.params.userId})
        .then(posts => res.status(status.OK).send(posts))
        .catch(err => res.status(status.BAD_REQUEST).send({err, message:'Error to get post'}))
}