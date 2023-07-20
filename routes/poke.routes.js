const { getPokemonById } = require("../controllers/poke.controller")

function pokeRoutes ( app ) {
  app.get('/pokemon/:id', getPokemonById)
}

module.exports = { pokeRoutes }