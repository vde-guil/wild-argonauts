//= npm imports
const { Router } = require('express');
const router = Router();

//= other imports
const argonautController = require('./controllers/argonautController')

router.get('/argonauts', argonautController.getArgonauts);
router.post('/argonaut', argonautController.addArgonaut);

module.exports = router;