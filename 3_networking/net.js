// Create a server with the net module createServer method
const server = require('net').createServer();

// server object is an EventEmitter 
// It Emits an 'connection' event when ever a client connects to the server
// A Handler is registered the handler gives access to connected socket
// The socket is also an EventEmitter it emits 'data' event when user types into the connection
// Also emits 'end' when the connection is closed

function timestamp(){
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

let counter = 0;
let sockets = {};
server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log('Client connected');
    socket.write('Please type your name: ');

    socket.on('data', data => {
        if(!sockets[socket.id]) {
            socket.name = data;
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
        }
        Object.entries(sockets).forEach(([key, cs]) => {
            if(socket.id === key) {
                return;
            }
            cs.write(`${socket.name} ${timestamp()}: `);
            cs.write(data);
        })
    });

    socket.on('end', () => {
        delete sockets[socket.id]
        console.log('Client disconnected!');
    })
})

server.listen(8000, () => console.log('Server bound'));