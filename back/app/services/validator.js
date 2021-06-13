
/**
 * function that generate a middleware to validate the content of the request.body
 * if everything is ok, we call next() to go to the next middleware
 * 
 * @param {*} schema 
 * @returns an error if the body does not comply to our Joi validator schema
 */
const validator = (schema) => (req, res, next) => {

    const { error } = schema.validate(req.body);
    
    if (error) {
        const { message } = error.details[0];
        
        res.status(400).json(message);
    } else {
        next();
    }
};

module.exports = validator;