//= npm imports
const { Router } = require('express');
const router = Router();

//= other imports
const argonautController = require('./controllers/argonautController')
const argonautSchema = require('./schemas/argonaut');
const bodyValidator = require('./services/validator')
const bodySanitizer = require('./services/sanitize');


/**
 * Returns all argonauts form the database
 * 
 * @route GET /argonauts
 * @group Argonauts
 * @returns {Array<Argonaut>} 200 - an array of argonauts
 */
router.get('/argonauts', argonautController.getArgonauts);

/**
 * gets a request.body to create an Argonaut in DB. The body is sanitized first, then the body is validated
 * and finally added to the db
 * 
 * @route POST /argonaut
 * @group Argonauts
 * @param {string} name.body.required - name of the crew member
 * @returns - 201 successfully created
 */
router.post('/argonaut', bodySanitizer, bodyValidator(argonautSchema), argonautController.addArgonaut);

module.exports = router;