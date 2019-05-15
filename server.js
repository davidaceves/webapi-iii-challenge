const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use(express.json());

server.use(logger);

//custom middleware

function logger(req, res, next) {
  console.log(req, res, next);
  next();
};

module.exports = server;
