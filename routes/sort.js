const express = require('express');
const router = express.Router();
const sortController = require('../controller/sort_controller');
router.get('/',sortController.sort);
module.exports = router;