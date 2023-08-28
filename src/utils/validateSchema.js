const Joi = require('joi');
const joiValidate = require('../middlewares/joiValidate');

const validateSchema = {
  loginField: joiValidate(Joi.object({
    email: Joi.string().required().messages({
      'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Some required fields are missing',
    }),
  })),
  /*
  isProductName: schemaValidation(Joi.object({
    name: Joi.string().required().empty('').min(5),
  })),

  isSaleValid: schemaValidation(Joi.array().items(
    Joi.object({
      productId: Joi.number().integer().required().empty('')
        .min(1)
        .label('productId'),
      quantity: Joi.number().required().empty('').min(1)
        .label('quantity'),
    }),
  )),
  */
};

module.exports = validateSchema;