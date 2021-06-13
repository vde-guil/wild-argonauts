const sanitizer = require('sanitizer');

/**
 * This service sanitize the user input that we got in request.body to prevent
 * @param {*} body - the body of the request
 */
const sanitize = body => {
  // Prevent possible injections from the user (through the request body)
  for (const prop in body) {
      body[prop] = sanitizer.escape(body[prop]);
  }
};

/**
 * 
 * @param {*} request - request object from express
 * @param {*} response - response object from express
 * @param {*} next - next function from express to got to the next middleware
 */

const middleware = (request, response, next) => {
  
  sanitize(request.body);

  // Next to the next middleware
  next();
};

module.exports = middleware;