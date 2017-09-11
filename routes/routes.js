var Client = require('.././model/client.js');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.send("connected to api");
    });

    app.post('/subscribe', function(req, res) {
        console.log(req.body);

        var email = req.body.email;

        Client.find({ 'email': email }, function(err, users) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                if (users.length == 0) {
                    var c = new Client();
                    c.email = email;
                    c.subscribedOn = (new Date()).toString();

                    c.save(function(err) {
                        if (err) {
                            console.log(err);
                            res.send({ 'message': "Couldn't Process!! Try again later" });
                        } else {
                            console.log("Successfully submitted!");
                            res.send({ 'message': "Successfully submitted!" });
                        }
                    });
                } else {
                    console.log("Already registered");
                    res.send({ 'message': "Already registered!!" });
                }
            }
        });
    });
}