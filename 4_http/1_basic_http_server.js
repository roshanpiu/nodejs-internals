const server = require('http').createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Hello world\n');

    setTimeout(function () {
        res.write('Another one');
    }, 1000);

    setTimeout(function () {
        res.write('Yet Another one');
    }, 1000);
})

server.listen(8000);