const express = require('express');
const path = require('path');
var pdf = require('html-pdf');
const app = express();

app.listen(3000, function () { console.log('Listing on Port 3000'); });

app.get('/', function (req, res) {
    var options = { format: 'Letter' };
    var info = {

        "Company": "ABC",
        "Team": "JsonNode",
        "Number of members": 4,
        "Time to finish": "1 day"
    }
    var htm = `<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <style>
    td { border : 1px solid gray; }
    </style>
    </head>
    <body>
    <h1>This is heading</h1>
    <table style="border: 1px solid red">
    <tr>
    <td>A</td>
    <td>B</td>
    </tr>
    <tr>
    <td>C</td>
    <td>D</td>
    </tr>
    </table>
    </body>
    </html>`;

    pdf.create(htm, options).toFile('./downloads/employee.pdf', function (err, result) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
    })

    res.send('done');
});
