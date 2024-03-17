const express = require('express');
const router = express.Router();
const calculatorRouter = require('./calculator')
const homeRouter = require('./homePage');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'successfully' })
});
router.use('/pages/calculator', calculatorRouter)
router.use('/home', homeRouter);

module.exports = router;
