const Joi = require('@hapi/joi');

const loginSchema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(5).max(20).regex(/^[a-zA-Z0-9]+[@\$][a-zA-Z0-9]*$/).required()
    // password must be started with any alphanumeric character 
    // and must contain a special character [@ or $]
});

const registrationSchema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    fullname: Joi.string().min(5).max(30).optional().default(Joi.ref('username')),
    email: Joi.string().min(6).max(40).regex(/^[a-zA-Z][a-zA-Z0-9]*@(gmail|yahoo|hotmail)\.(com|net)$/).required(),
    password: Joi.string().min(5).max(20).regex(/^[a-zA-Z0-9]+[@\$][a-zA-Z0-9]*$/).required(),
    confirmpass: Joi.string().valid(Joi.ref('password'))
});

// image and modifier wiil be verified further
const bookSchema = Joi.object({
    title       : Joi.string().max(30).required(),
    description : Joi.string().max(250).optional(),
    author      : Joi.string().max(30).required(),
    isbn        : Joi.string().max(40).optional(),
    rating      : Joi.number().precision(2).optional().max(10).default(0),
    seller      : Joi.string().max(30).optional(),
    modifier    : Joi.string().max(30).optional(),
    image       : Joi.any()
});

module.exports = {
    loginSchema,
    registrationSchema,
    bookSchema
}