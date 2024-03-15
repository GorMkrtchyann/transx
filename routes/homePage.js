const express = require('express');
const router = express.Router();
const HomePageController = require('../controllers/HomePageController')

/* GET users listing. */
router.post('/slide', HomePageController.slide);
router.get('/slide-data', HomePageController.sendAllSlides);
router.put('/slide-edit', HomePageController.editSlide);
router.delete('/slide-delete/:id', HomePageController.deleteSlide);

module.exports = router;
