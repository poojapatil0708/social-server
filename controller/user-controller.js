const { status } = require("../constants")
const { createUserService } = require("../services/user-service")

exports.createUserController = (req, res) => {
    createUserService(req.body)
        .then(user => res.status(status.OK).send({user, message: 'User created successfully' }))
        .catch(err => res.status(status.BAD_REQUEST).send({ err, message: 'Error creating user' }))
}