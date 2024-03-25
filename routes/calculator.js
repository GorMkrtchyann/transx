const express = require('express');
const Calculator = require('../controllers/Calculator');
const router = express.Router();

///Images request
router.patch('/images', Calculator.CreateImg);
router.get('/images', Calculator.GetAllImg);

///Select request
router.get('/selection', Calculator.GetAllSelect);
router.post('/selection', Calculator.CreateSelect);
router.delete('/selection', Calculator.DeleteSelect);
router.patch('/selection', Calculator.EditSelect);

module.exports = router;
