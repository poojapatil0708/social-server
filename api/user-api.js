const { createUserController, loginUserController } = require('../controller/user-controller');

const router = require('express').Router();

router.post('/create', createUserController);
router.post('/login', loginUserController);

module.exports = router;