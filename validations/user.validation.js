const { object, string, number } = require('yup')

const userValidation = object({
  name: string().required(),
  last_name: string().required(),
  cpf: number().required()
})

module.exports = { userValidation }