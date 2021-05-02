console.log(module);

const findMeExports = require('./start');

console.log(arguments);

console.log('findMeExports', findMeExports);

// cannot use exports object inside timers