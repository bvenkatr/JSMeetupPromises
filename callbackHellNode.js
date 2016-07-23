var express = require('express');
var fs = require('fs');
var app = express();

app.post('/process-file', function(req, res) {
    var inputFile = 'input.txt';
    var outputFile = 'output.txt';

    fs.readFile(inputFile, function(err, data) {
        if (err) return res.status(500).send(err);

        process1(data, function(err, data) {
            if (err) return res.status(500).send(err);

            process2(data, function(err, data) {
                if (err) return res.status(500).send(err);

                process3(data, function(err, data) {
                    if (err) return res.status(500).send(err);

                    fs.writeFile(outputFile, data, function(err) {
                        if (err) return res.status(500).send(err);

                        res.status(200).send('processed successfully using callback hell');
                    });
                });
            });
        });
    });
});
