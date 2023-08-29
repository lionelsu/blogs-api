const joiMapStatusHTTP = {
  'any.string': 'BAD_REQUEST',
  'any.required': 'BAD_REQUEST',
  'string.empty': 'BAD_REQUEST',
  'string.min': 'BAD_REQUEST',
  'string.email': 'BAD_REQUEST',
  'number.min': 'INVALID_VALUE',
};

module.exports = joiMapStatusHTTP;
