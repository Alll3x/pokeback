const { pokeQueryById } = require('../repositories/poke.repository');
const { pokeCreation } = require('../validations/poke.validation');

const getPokemonById = async (req, res) => {
  try {
    const idOrName = req.params.id
    let response

    if (isNaN(idOrName)) {
      response = await pokeQueryById(idOrName)
    } else {
      response = await pokeQueryById(Number(idOrName))
    }

    const pokemon = await pokeCreation(response)
    res.status(200).send(pokemon)
  } catch (error) {
    res.status(400).send(error)
  }
};

module.exports = { getPokemonById }