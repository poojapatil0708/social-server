const User = require('../models/user-model');

exports.createUserService = (data) => {
    return User.create(data)
        .then(user => { return user })
        .catch(err => { throw err })
}

exports.getLoginService = (query) => {
    return User.findOne(query)
    .then(user => { return user })
    .catch(err => {throw err})
}
