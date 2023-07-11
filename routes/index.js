const { userRoutes } = require('./user.routes')
const { teamRoutes } = require('./team.routes')

const routes = app => {
  userRoutes(app)
  teamRoutes(app)
}

module.exports = ( routes )