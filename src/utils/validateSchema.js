const Joi = require('joi');
const joiValidate = require('../middlewares/joiValidate');

const customMessage = {
  'string.empty': 'Some required fields are missing',
};

const validateSchema = {
  loginField: joiValidate(Joi.object({
    email: Joi.string().required().messages({
      ...customMessage,
    }),
    password: Joi.string().required().messages({
      ...customMessage,
    }),
  })),

  createUser: joiValidate(Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().optional(),
  })),

  createCategory: joiValidate(Joi.object({
    name: Joi.string().required(),
  })),

  createPost: joiValidate(Joi.object({
      title: Joi.string().required().messages({
        ...customMessage,
      }),
      content: Joi.string().required().messages({
        ...customMessage,
      }),
      categoryIds: Joi.array().items(Joi.number().integer().required()),
    })),

  updatePost: joiValidate(Joi.object({
    title: Joi.string().required().messages({
      ...customMessage,
    }),
    content: Joi.string().required().messages({
      ...customMessage,
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
