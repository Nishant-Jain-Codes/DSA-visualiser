const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
router.get('/',homeController.home);
router.use('/sort',require('./sort'));
router.use('/search',require('./search'));
module.exports = router;