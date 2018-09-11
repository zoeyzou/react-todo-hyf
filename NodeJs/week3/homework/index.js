const http = require('http');
const Router = require('./router');

const database = {};

const router = new Router(function onNotFound (req, res) {
  res.statusCode = 404
  res.statusMessage = http.STATUS_CODES[404]
  res.setHeader('Content-Type', 'text/plain')
  res.end(http.STATUS_CODES[404] + '\n')
})

router.get('/time', function(req, res) {
  res.statusCode = 200
  res.statusMessage = http.STATUS_CODES[200]
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(database.time));
});

router.post('/time', function(req, res) {
  req.on('data', function(data) {
    try {
      let newData = JSON.parse(data)
      console.log(JSON.parse(data));
      database.time = database.time || [];
      database.time.push(newData);
    } catch(err) {
      throw new Error('data should be JSON format');
    }
  });
  req.on('end', function() {
    console.log('END', database);
    res.end();
  });
});



router.get('/name', function (req, res) {
  res.statusCode = 200
  res.statusMessage = http.STATUS_CODES[200]
  res.setHeader('Content-Type', 'text/html')
  res.end(`<html><h1>My name is localhost:8080</h1></html>`)
})

const server = http.createServer(function (req, res) {
  // console.dir(req, { color: true, depth: 0 })
  //
  // req.url
  // req.headers
  // req.method
  router.dispatch(req, res)
})

// PORT > 1024
server.listen(8080)
