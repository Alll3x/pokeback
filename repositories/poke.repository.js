const pokeQueryById = async (id) => {
  var query = `${process.env.POKE_URL}${id}`;
  try {
    const response = await fetch(query, { method: 'GET' });
    const data = await response.json(); 
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = { pokeQueryById };