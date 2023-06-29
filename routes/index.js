const { userRoutes } = require('./user.routes')

const routes = app =>{
  userRoutes(app)
}

module.exports = (routes)