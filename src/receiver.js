var _ = require('eakwell');

// Used on mobile device to receive
// tracking data from the specified desktop
var Receiver = function(uuid, cb) {
  var socket = io();

  // Register for updates from desktop
  socket.emit('register', uuid);
  
  // Feed engine with real world positions
  socket.on('data', function(body) {
    cb(body);
  });
};

module.exports = Receiver;
