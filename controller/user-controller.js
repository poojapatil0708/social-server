const { query } = require("express")
const { status } = require("../constants")
const { createUserService, getLoginService } = require("../services/user-service")

exports.createUserController = (req, res) => {
    createUserService(req.body)
        .then(user => res.status(status.OK).send({ user, message: 'User created successfully' }))
        .catch(err => res.status(status.BAD_REQUEST).send({ err, message: 'Error creating user' }))
}

exports.loginUserController = (req, res) => {
    let query = { email: req.body.email, password: req.body.password }
    getLoginService(query)
        .then(user => {
            if (user) {
                res.status(status.OK).send({ user, message: 'User Login successfully' })
            }
            else {
                res.status(status.BAD_REQUEST).send({ message: 'User not found' })
            }
        })
        .catch(err => res.status(status.BAD_REQUEST).send({ message: 'Internel server error', err }))
}