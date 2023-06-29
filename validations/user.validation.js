const { object, string, number } = require('yup')
const bcrypt = require('bcrypt')

const createUserValidation = object({
  name: string().required(),
  email: string(). required(),
  nickname: string().required(),
  password : string().required(),
})

const loginValidation = object({
  email: string(). required(),
  password: string().required()
})

const verifyAttempToLogin = async (attemp, originalData) =>{
   return await bcrypt.compare(attemp, originalData.password)
}

module.exports = { createUserValidation, loginValidation, verifyAttempToLogin }