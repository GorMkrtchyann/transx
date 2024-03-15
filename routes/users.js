const express = require('express');
const router = express.Router();
const {CreateRequest} = require('../controllers/CalculatorController')

router.post('/sendRequest', CreateRequest);

module.exports = router;
