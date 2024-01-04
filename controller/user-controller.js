const { query } = require("express")
const { status } = require("../constants")
const { createUserService, getUserService } = require("../services/user-service")

exports.createUserController = (req, res) => {
    getUserService({ email: req.body.email })
        .then(user => {
            if (!user) {
                return createUserService(req.body)
            }
            else throw ({ message: 'User already exists' })
        })
        .then(user => res.status(status.OK).send({ user, message: 'User created successfully' }))
        .catch(err => res.status(status.BAD_REQUEST).send(err))
}

exports.loginUserController = (req, res) => {
    let query = { email: req.body.email, password: req.body.password }
    getUserService(query)
        .then(user => {
            if (user) {
                res.status(status.OK).send({ user, message: 'User Login successfully' })
            }
            else {
                res.status(status.BAD_REQUEST).send({ message: 'Invalid email or password' })
            }
        })
        .catch(err => res.status(status.BAD_REQUEST).send({ message: 'Internel server error', err }))
}