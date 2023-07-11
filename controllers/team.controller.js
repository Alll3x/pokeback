const { createTeam, getTeamById } = require('../repositories/team.repository')
const { verifyTeam } = require('../validations/team.validation')

const create = async (req, res) => {
  try {
    await verifyTeam.validate(req.body)
    const team = await createTeam(req.body)
    res.status(200).send("Time criado com sucesso " + team)
  } catch (error) {
    res.status(400).send(error)
  }
}

const teamById = async(req, res) => {
  try {
    const team = await getTeamById(Number(req.params.id))
    res.status(200).send(team)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = { create, teamById }