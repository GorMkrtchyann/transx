const express = require('express');
const router = express.Router();
const contactRouter = require('./contact')
const adminRouter = require('./admin')
const headerRouter = require('./header')
const footerRouter = require('./footer')
const homeRouter = require('./homePage');
const serviceRouter = require('./service')
const calculatorRouter=require('./calculator')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'successfully' })
});

router.use('/contact', contactRouter)
router.use('/admin', adminRouter)
router.use('/header', headerRouter)
router.use('/footer', footerRouter)
router.use('/pages/calculator', calculatorRouter)
router.use('/service', serviceRouter)
router.use('/home', homeRouter);


module.exports = router;
