const { createUserController } = require('../controller/user-controller');

const router = require('express').Router();

router.post('/create', createUserController);

module.exports = router;