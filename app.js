var https = require('https');

https.createServer(function(req, res) {
    res.end('hello word!!');
}).listen('8080');
console.log('listening at port 8080');