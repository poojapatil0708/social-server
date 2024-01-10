const User = require('../models/user-model');

exports.createUserService = (data) => {
    return User.create(data)
        .then(user => { return user })
        .catch(err => { throw err })
}

exports.getUserService = (query) => {
    return User.findOne(query)
        .then(user => { return user })
        .catch(err => { throw err })
}

exports.getMultipleUserService = (query) => {
    return User.find(query)
        .then(user => { return user })
        .catch(err => { throw err })
}