const Joi = require('joi');

const schema = Joi.object({
    name:Joi.string()
    .min(1)
    .max(30)
    .required(),
});

module.exports = schema;