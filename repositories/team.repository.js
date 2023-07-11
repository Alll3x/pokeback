const { prisma } = require ('../prisma/prisma')

const createTeam = async (data) => {
  const team = await prisma.team.create({
    data
  })
  return team
}

const getTeamById = async (id) => {
  const team = await prisma.team.findUnique({
    where:{
      id
    }
  })
  return team
}

module.exports = { createTeam, getTeamById }