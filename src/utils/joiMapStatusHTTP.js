const joiMapStatusHTTP = {
  'any.string': 'BAD_REQUEST',
  'any.required': 'BAD_REQUEST',
  'string.empty': 'BAD_REQUEST',
  'string.min': 'BAD_REQUEST',
  'number.min': 'INVALID_VALUE',
  'string.email': 'BAD_REQUEST',
};

module.exports = joiMapStatusHTTP;
