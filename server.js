const path = require("path");

const express = require("express");

const app = express();

const http = require("http");
const server = http.createServer(app);

const socketio = require("socket.io");

//const { Socket } = require("dgram");

const io = socketio(server);

io.on('connection', (socket)=>{

    //console.log("New Connection");

    //io.emit('message', 'Welcome to chat code');
    //socket.broadcast.emit('message', 'A user joins to chat room');

    socket.on('disconnect', ()=>{
        //io.emit('message', 'A user disconnected');

    });

    socket.on('chatmessage', (msg) =>{
        //console.log(msg);
        io.emit('message', msg);
    });

    
});


const PORT = 3000 || process.env.PORT;

//Set Static folder
app.use(express.static(path.join(__dirname,'public')));

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});