const { create, teamById } = require("../controllers/team.controller")

function teamRoutes ( app ) {
  app.post('/createTeam', create)
  app.get('/team/:id', teamById)
}

module.exports = { teamRoutes }