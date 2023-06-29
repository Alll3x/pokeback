const { prisma } = require ('../prisma/prisma')

const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select:{
      id: true,
      name: true,
      email: true,
      nickname: true,
      password: true,
      status: true,
      created_at: true,
      updated_at: true
    }
  })
  return user
}

const getByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where:{
      email
    }
  })
  return user
}

const getAll = async () => {
  const users = await prisma.user.findMany({})
  return users
}

const getById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where:{
        id
      }
    })
    return user
  } catch (error) {
    return error
  }
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

module.exports = { createUser, getAll, getById, getByEmail }