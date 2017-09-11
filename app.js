var mongoose = require('mongoose');
mongoose.connect('mongodb://ojamapp:admin@ds127864.mlab.com:27864/db_ojam');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "content-type, x-requested-with, content-length, accept, cache-control, key, origin");

    if ('OPTIONS' == req.method) {
        console.log('cors');
        console.log(req.body);
        res.sendStatus(200);
    } else {
        console.log('next');
        next();
    }
});

require('./routes/routes.js')(app);

app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send(err);
});

console.log("connected");
console.log("server is listening at 8080")