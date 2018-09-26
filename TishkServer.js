var express = require('express')
var app = express()

var cords=[0,0,0];
var server=app.listen(3000,listening);


///socket
var socket = require ('socket.io');

var io=socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection:'+socket.id);
  socket.on('cords',msg);
  function msg(data){
    socket.broadcast.emit('cords',data);
    console.log(data);
  }
}




app.get('/gun', function (req, res) {
  
  res.send(cords);
  
});





function listening(){

  console.log("Listening...")

}



app.use(express.static("DuckHunt"));
