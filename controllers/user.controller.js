const { createUser, getAll, getById, getByEmail } = require('../repositories/user.repository')
const { createUserValidation, loginValidation, verifyAttempToLogin } = require('../validations/user.validation')
const bcrypt = require('bcrypt')

const create = async (req, res) => {
  try {
    await createUserValidation.validate(req.body)
    const encrypted = await bcrypt.hash(req.body.password, 10)
    req.body.password = encrypted
    const user = await createUser(req.body)
    res.status(200).send("Usuário realizado com sucesso !")
  } catch (error) {
    res.status(400).send(error)
  }
} 

const verifyLogin = async (req, res) => {
  try {
    await loginValidation.validate(req.body)
    const user = await getByEmail(req.body.email)
    if(await verifyAttempToLogin(req.body.password, user)){
      res.status(200).send('Login realizado com sucesso')
    }else{
      res.status(200).send('Email ou senha incorretos, verifique !')
    }
  } catch (error) {
   res.status(400).send(error) 
  }
}

const get = async (req, res) => {
  try {
    const users = await getAll()
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getId = async (req, res) => {
  try {
    const user = await getById(Number(req.params.id))
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

const update = async (req, res) => {
  try {
    const user = await updateUser(Number(req.params.id), req.body)
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

const remove = async (req, res) => {
  try {
    await deleteUser(Number(req.params.id))
    res.status(200).send('Usuário deletado')
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = { create, verifyLogin, get, getId }