var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile(__dirname+ '/chatapp2.html');
});

users = [];
var name;
io.sockets.on('connect', function(socket) {
    var sessionid = socket.id;
    
  });

io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('setUsername', function(data) {
      console.log(data);
      
      if(users.indexOf(data) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         socket.emit('userSet', {username: data});
      }
   });
   
   socket.on('msg', function(data) {
      
      io.to(id).emit("chat message", data);
   })
});

    http.listen(3005,function(){
    console.log("start port 3005");
     });
