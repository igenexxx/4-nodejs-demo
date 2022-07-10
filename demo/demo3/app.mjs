import greeting, { characters as chars, greet } from "./character.mjs";

chars.forEach(greet);
console.log(greeting);