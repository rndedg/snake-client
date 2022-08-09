const IP = "localhost";
const PORT = 50541;
const name = process.argv.slice(2);

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