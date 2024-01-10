const { createUserController, loginUserController, searchController } = require('../controller/user-controller');

const router = require('express').Router();

router.post('/create', createUserController);
router.post('/login', loginUserController);
router.get('/search/:full_name', searchController);

module.exports = router;