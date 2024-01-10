const { createPostController, getPostController, deletePostController } = require('../controller/post-controller');

const router = require('express').Router();

router.post('/create', createPostController);
router.get('/getpost/:userId', getPostController);
router.delete('/:id', deletePostController);

module.exports = router;

