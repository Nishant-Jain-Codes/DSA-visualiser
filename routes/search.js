const express = require('express');
const router = express.Router();
const searchController = require('../controller/search_controller');
router.get('/',searchController.search);
module.exports = router;