var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var messages = [];

app.use(bodyParser());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})


app.get('/', function(req, res) {
    res.send(JSON.stringify(messages))
})

app.post('/', function(req, res) {
  
    req.body.createdAt = new Date();
    console.log(req.body)
    messages.push(req.body)
    res.send(JSON.stringify(messages))
})


app.listen(8080);






















// var http = require('http');
// var port = 9901;
// var messages = [];


// var onRequest = function(req, res) {


//     if (req.method === 'GET') {
//         res.writeHead(200, {
//             'Connection': 'close',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             // 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//         });
//         res.end(JSON.stringify(messages));
//     } else if (req.method === 'POST') {
//         var postData = '';
//         req.on('data', function(chunk) {
//             postData += chunk;
//         });
//         req.on('end', function() {
//             console.log("Got POST data:");
//             var newMessage = JSON.parse(postData);
//             newMessage.createdAt = new Date().toISOString();
//             messages.push(newMessage);

//             res.writeHead(200, {
//                 'Connection': 'close',
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//             });
//             res.end(JSON.stringify(messages));

//         });

//     } else if (req.method === 'OPTIONS') {
//         res.writeHead(200, {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//         });
//         res.end();
//     }
// };

// http.createServer(onRequest).listen(port);
// console.log('Listening on port 9901');
