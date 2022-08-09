const IP = "localhost";
const PORT = 50541;

// Variable for naming player's snake
const name = process.argv.slice(2);

// Control layout variables to keep code tidy
const moveUpKey = 'w';
const moveDownKey = 's';
const moveLeftKey = 'a';
const moveRightKey = 'd';


module.exports = {
  IP,
  PORT,
  name,
  moveUpKey,
  moveDownKey,
  moveRightKey,
  moveLeftKey,
};