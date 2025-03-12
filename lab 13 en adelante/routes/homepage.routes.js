const express = require('express');
const router = express.Router();

const homepage_controller = require('../controllers/homepage.controller');

router.get('/xp3', homepage_controller.get_xp3);
router.get('/PurpleMode', homepage_controller.get_purplemode);

module.exports = router;