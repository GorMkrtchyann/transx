const express = require('express');
const router = express.Router();
const userRouter = require('./users')
const calculatorRouter = require('./calculator')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'successfully' })
});
router.use('/dashboard/pages/calculator', calculatorRouter)

module.exports = router;
