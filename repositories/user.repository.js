const { prisma } = require ('../prisma/prisma')

const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select:{
      id: true,
      name: true,
      last_name: false,
      cpf: true,
      created_at: true
    }
  })
  return user
}

const getAll = async () => {
  const users = await prisma.user.findMany({})
  return users
}

const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where:{
      id
    }
  })
  return user
}

const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where:{
      id,
    },
    data
  })
  return user
}

const deleteUser = async (id) => {
  await prisma.user.delete({
    where:{
      id,
    },
  })
  return
}

module.exports = { createUser, getAll, getById, updateUser, deleteUser }