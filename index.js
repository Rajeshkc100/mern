// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     res.writeHead(200);
//     const q = url.parse(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     // res.write(req.url);
//     res.end(txt);
// });

// console.log("Hello World from console")

// server.listen(8080)

// Controller -> Services -> Repository -> Models

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

let app = express();

let port = 8080;

let todoRoute = require('./routes/todoRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/TodoBatch5');
const db = mongoose.connection;

db.once('open', () => {
    console.log('Mongodb is connected successfully');
});

app.use('/', todoRoute);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

module.exports = app;