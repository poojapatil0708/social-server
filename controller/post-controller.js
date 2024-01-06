const { status } = require("../constants")
const { createPostService } = require("../services/post-service")

exports.createPostController = (req, res) => {
    createPostService(req.body)
        .then(newTask => res.status(status.OK).send({newTask, message:'Post created successfuly'}))
        .catch(err => res.status(status.BAD_REQUEST).send({err, message:'Error creating post'}))
}