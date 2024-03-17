const express = require('express');
const Calculator = require('../controllers/Calculator');
const router = express.Router();

router.route('/img')
    .patch(Calculator.img)
    .get(Calculator.getImg)
router.route('/select')
    .get(Calculator.getSelect)
    .post(Calculator.addSelect)
    .delete(Calculator.delete)
    .patch(Calculator.edit)
module.exports = router;
