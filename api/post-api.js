const { createPostController } = require('../controller/post-controller');

const router = require('express').Router();

router.post('/create', createPostController);

module.exports = router;

