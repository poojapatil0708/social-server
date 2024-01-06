const router = require('express').Router();
const userRouter = require('./user-api');
const postRouter = require('./post-api')

//Welcome page
const welcomeSnippet = `<div style='display:flex; justify-content: center; align-items:center' ><h1>Welcome to Social Media Server</h1></div>`

router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(welcomeSnippet);
    res.end();
});

router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;