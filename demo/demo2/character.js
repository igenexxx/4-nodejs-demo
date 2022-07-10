const characters = [
  { name: 'Frodo', hasRing: false },
  { name: 'Bilbo', hasRing: false },
];

function stealRing(characters, owner) {
  characters.forEach(char => char.hasRing = char.name === owner)
}

module.exports = {
  characters,
  stealRing,
}