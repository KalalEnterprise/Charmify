const express = require('express');
const botController = require('../controllers/botController');

const router = express.Router();

router.post('/twilio', botController.handleIncomingMessage);

module.exports = router;