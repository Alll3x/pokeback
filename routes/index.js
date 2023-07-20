const { userRoutes } = require('./user.routes')
const { teamRoutes } = require('./team.routes')
const { pokeRoutes } = require('./poke.routes')

const routes = app => {
  userRoutes(app)
  teamRoutes(app)
  pokeRoutes(app)
}

module.exports = ( routes )