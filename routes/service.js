

const express = require('express');
const ServiceLeave = require('../controllers/servicesPage/ServiceLeave');
const ServiceInfo = require('../controllers/servicesPage/ServiceInfo');
const ServiceTransport = require('../controllers/servicesPage/ServiceTransport');
const ServiceBanner = require('../controllers/servicesPage/ServiceBanner');
const ServiceSteps = require('../controllers/servicesPage/ServiceSteps');
const router = express.Router();
//info request
router.patch('/info/title', ServiceInfo.EditInfoTitle)
router.patch('/info/description', ServiceInfo.EditInfoDescription)
router.get('/info', ServiceInfo.GetAllData)
router.patch('/info/images', ServiceInfo.EditInfoImages)
///transport request
router.get('/transport', ServiceTransport.GetAllData)
router.patch('/transport/title', ServiceTransport.EditTransportTitle)
router.patch('/transport/description', ServiceTransport.EditTransportDescription)
///banner request
router.get('/images', ServiceBanner.GetAllData)
router.patch('/images', ServiceBanner.EditImages)
///steps request
router.get('/steps', ServiceSteps.GetAllData)
router.patch('/steps/title', ServiceSteps.EditStepstTitle)
router.patch('/steps/description', ServiceSteps.EditStepsDescription)
///Leave request
router.get('/leave', ServiceLeave.GeatAllData);

module.exports = router;
