const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const homeRouter = require('./homePage');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'successfully' })
});

router.use('/home', homeRouter);

module.exports = router;
