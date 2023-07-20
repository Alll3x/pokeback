const Pokemon = require('../models/pokemon.model')

const pokeCreation = async (data) => {
 try {
  var pokemon = new Pokemon(data)
  return pokemon
 } catch (error) {
  return error
 }
};

module.exports = { pokeCreation };