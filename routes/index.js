const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const contactRouter = require('./contact')
const userRouter = require('./users')
const adminRouter = require('./admin')
const headerRouter = require('./header')
const footerRouter = require('./footer')
=======
const calculatorRouter = require('./calculator')
>>>>>>> 33e9faf2f15379f29871fe6efb4d91d978d621ac
const homeRouter = require('./homePage');

router.get('/', function (req, res, next) {
  res.json({ message: 'successfully' })
});
<<<<<<< HEAD

router.use('/contact', contactRouter)
router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/header', headerRouter)
router.use('/footer', footerRouter)
=======
router.use('/pages/calculator', calculatorRouter)
>>>>>>> 33e9faf2f15379f29871fe6efb4d91d978d621ac
router.use('/home', homeRouter);


module.exports = router;
