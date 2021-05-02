const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf-8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk != null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString()', buffer.toString());
        console.log('with StringDecoder', decoder.write(buffer));
    }
})

// If you are receiving UTF-8 bytes as chunks in a stream you should always use String Decoder