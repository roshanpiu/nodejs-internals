const EventEmitter = require('events');

class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('Before executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('After executing');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));

withLog.execute(() => console.log('*** Executing Task ***'));

// Emitting event means that some condition has occurred usually a state change

// All if this happens sync

// With event emitters we can listen and react to same event multiple times
// By registering different listeners 
// Events are a great way for applications to allow multiple external plugins to build functionality
// on top of the application core. they are essentially hook points to allow for customizing the story around a state change
