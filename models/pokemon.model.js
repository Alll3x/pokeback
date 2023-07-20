class Pokemon {
  constructor({
    id,
    name,
    height,
    weight,
    types,
    sprites,
    base_experience,
    abilities,
    stats,
    order,
    moves,
    forms,
    held_items,
    is_default,
    species,
    past_types
  }) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.base_experience = base_experience;
    this.order = order;
    this.types = types;
    this.stats = stats;
    this.sprites = sprites;
    this.abilities = abilities;
    this.moves = moves;
    this.forms = forms;
    this.held_items = held_items;
    this.is_default = is_default;
    this.past_types = past_types;
    this.species = species;
  }
}

module.exports = Pokemon;