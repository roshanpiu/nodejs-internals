const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        process.nextTick(() => {
            this.emit('response', 'Type a command (help to list all commands)')
        })
        client.on('command', (command, args) => {
            switch (command) {
                case 'help':
                    
                    break;
                case 'add':
                    
                    break;
                case 'ls':
                    
                    break;
                case 'delete':
                    this[command](args);
                    break;
            
                default:
                    this.emit('response', 'unknown command')
            }
        })
    }

    help() {
        this.emit('response', 'help....');
    }
    add(args) {
        this.emit('response', args.join(' '));
    }
    ls() {
        this.emit('response', 'ls....');
    }
    delete() {
        this.emit('response', 'delete....');
    }
}

module.exports = (client) => new Server(client)