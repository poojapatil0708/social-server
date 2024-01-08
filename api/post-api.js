const { createPostController, getPostController } = require('../controller/post-controller');

const router = require('express').Router();

router.post('/create', createPostController);
router.get('/getpost/:userId', getPostController);

module.exports = router;

