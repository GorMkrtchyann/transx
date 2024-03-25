const express = require('express');
const router = express.Router();
const contactRouter = require('./contact')
const userRouter = require('./users')
const adminRouter = require('./admin')
const headerRouter = require('./header')
const footerRouter = require('./footer')
const homeRouter = require('./homePage');

router.get('/', function (req, res, next) {
  res.json({ message: 'successfully' })
});

router.use('/contact', contactRouter)
router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/header', headerRouter)
router.use('/footer', footerRouter)
router.use('/home', homeRouter);


module.exports = router;
