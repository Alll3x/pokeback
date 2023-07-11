const { object, string, number } = require('yup')

const verifyTeam = object({
    id_user: number().required(),
    teamName: string(). required(),
    pokemons: string().required(),
  })

module.exports = { verifyTeam }