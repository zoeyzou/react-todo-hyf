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
      let newData = JSON.parse(data);
      database.time = database.time || [];
      if (getIndexFromObjectArray(database.time, Object.keys(newData)[0]) === -1) {
        database.time.push(newData);
      } else {
        throw new Error('data already exists in the database');
      }
    } catch(err) {
      throw new Error('data should be JSON format');
    }
  });
  req.on('end', function() {
    res.end(JSON.stringify(database.time));
  });
});

router.delete('/time', function(req, res) {
  let body ='';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    // database.time is an array of object
    const index = getIndexFromObjectArray(database.time, body);

    if (index !== -1) {
      database.time.splice(index, 1);
    } else {
      throw new Error('data does not exist in the database');
    }
    res.end(JSON.stringify(database.time));
  });
});

router.put('/time', function(req, res) {
  let body = '';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    try {
      const parsedData = JSON.parse(body);
      let dataKey = Object.keys(parsedData)[0];
      const index = getIndexFromObjectArray(database.time, dataKey);
      if (index !== -1) {
        console.log('value', parsedData[dataKey]);
        database.time[index][dataKey] = parsedData[dataKey];
      } else {
        throw new Error('data key does not exist in the database, please change key or post first');
      }
    } catch(err) {
      // throw new Error('data should be JSON format');
      throw err;
    }
    res.end(JSON.stringify(database.time));
  });
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
server.listen(8080);

// helper functions
function getIndexFromObjectArray(objectArray, key) {
  return objectArray
          .map(item => Object.keys(item)[0])
          .indexOf(key);
}
