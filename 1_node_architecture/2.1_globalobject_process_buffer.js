// process object is an instance of event emitter
// we can emit events from process and we can listen to certain events on process


// 'exit' is emitted when Node's event loop has nothing else to do
// or a manual call to process.exit has been executed
// We can not prevent the process from exiting from inside the handler
process.on('exit', (code) => {
    // do one final synchronous operation
    // before the node process terminates
    // can only do synchronous operations here

    console.log(`About to exit with code ${code}`)
})

// emitted when ever a javascript exception is not handled and it bubbles all the way
// to the event loop. in that case Node will print the stacktrace and exit
// If we register an handler on the uncaughtException event Node will not exit 
// Usually this is bad and unpredictable in some cases so you should let the process exit
// And use another monitor process to restart the process that has exited 
process.on('uncaughtException', (err) => {
    console.error(err);
})

// keep the event loop busy
process.stdin.resume();

//console.dog();

// Creating Buffers

// Creates a filled buffer of certain type
Buffer.alloc(8)

// Will not fill the created buffer
// Since the buffer is not filled it could contain old and sensitive data
// So it should be filled right away
Buffer.allocUnsafe(8)

// Fill the unfilled buffer
Buffer.allocUnsafe(8).fill()

Buffer.allocUnsafe(800).toString();

const string = 'touche';
const buffer = Buffer.from('touche');

console.log(string, string.length);
console.log(buffer, buffer.length); // length is the actual number of bytes used
