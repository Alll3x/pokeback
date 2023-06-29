const { create, get, getId, update, remove } = require ('../controllers/user.controller')

function userRoutes ( app ){
  app.post('/teste', create)
  app.get('/users', get)
  app.get('/users/:id', getId)
  app.put('/users/:id', update)
  app.delete('/users/:id', remove)
}

module.exports = { userRoutes }