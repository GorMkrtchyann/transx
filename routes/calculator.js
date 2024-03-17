const express = require('express');
const Calculator = require('../controller/calculator');
const router = express.Router();

router.route('/img')
    .patch(Calculator.img)
    .get(Calculator.getImg)
router.route('/select')
    .get(Calculator.getSelect)
    .post(Calculator.select)
    .delete(Calculator.delete)

module.exports = router;
