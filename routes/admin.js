const express = require('express');
const router = express.Router();
const {GetAllRequests} = require('../controllers/CalculatorController')

router.get('/getAllRequests', GetAllRequests);

module.exports = router;
