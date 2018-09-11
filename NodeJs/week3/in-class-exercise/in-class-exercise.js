const http = require('http');

// console.dir(http, { color: true, depth: 0});
// console.dir(http.METHODS, { color: true, depth: null});

const server = http.createServer((req, res) => {
  res.statusCode = 301;
  res.statusMessage = http.STATUS_CODES[301];
  res.setHeader('Content-Type', 'text/plain'); //MIME Types

  res.end(new Date().toISOString());
});

server.listen(8080);
