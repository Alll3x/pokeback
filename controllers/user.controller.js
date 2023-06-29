const { createUser, getAll, getById, updateUser, deleteUser } = require('../repositories/user.repository')
const bcrypt = require('bcrypt')
const { userValidation } = require('../validations/user.validation')

const create = async (req, res) => {
  try {
    await userValidation.validate(req.body)
    const encrypted = await bcrypt.hash(req.body.last_name, 10)
    req.body.last_name = encrypted
    const user = await createUser(req.body)
    res.status(200).send(user)
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

module.exports = { create, get, getId, update, remove }