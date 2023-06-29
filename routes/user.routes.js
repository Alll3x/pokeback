const { create, get, getId, verifyLogin} = require ('../controllers/user.controller')

function userRoutes ( app ){
  app.post('/register', create)
  app.post('/login', verifyLogin)
  app.get('/users', get)
  app.get('/users/:id', getId)
  // app.put('/users/:id', update)
  // app.delete('/users/:id', remove)
}

module.exports = { userRoutes }