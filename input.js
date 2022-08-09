const { moveUpKey, moveDownKey, moveLeftKey, moveRightKey } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === moveUpKey) {
    connection.write("Move: up");
  } else if (key === moveLeftKey) {
    connection.write("Move: left");
  } else if (key === moveDownKey) {
    connection.write("Move: down");
  } else if (key === moveRightKey) {
    connection.write("Move: right");
  } else if (key === 't') {
    connection.write("Say: Take that!");
  } else if (key === 'g') {
    connection.write("Say: GG!");
  } else if (key === 'f') {
    connection.write("Say: Oh no!");
  }
};



module.exports = { setupInput };