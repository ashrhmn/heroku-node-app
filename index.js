var express = require('express')

// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

const port = 8080

var app = express()

// app.get('/', (req, res) => {
//     res.end("Hello World")
// })

// static page
const a = __dirname + '/appA/';
app.use(express.static(a));
app.get('/a', function(req, res) {
    res.sendFile(a + "index.html");
});


const path = __dirname + '/appA/';
app.use(express.static(path));
app.get('/', function(req, res) {
    // res.sendFile(path + "index.html");
    res.end(`Hello WOrld`)
});

app.listen(port, () => {
    console.log(`app started on ${port}`);
})