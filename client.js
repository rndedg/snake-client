const net = require("net");
const { IP, PORT, name } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  
  // sends a message to player when joining.
  // when joining, the player may add their initals to
  // to name their snake. (node play.js LHL)
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${name}`);
  });


  return conn;
};


module.exports = {connect};