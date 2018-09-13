const http = require('http');
const url = require('url');
const Router = require('./router');


const urlDatabase = new Map();

const router = new Router(function onNotFound (req, res) {
  res.statusCode = 404
  res.statusMessage = http.STATUS_CODES[404]
  res.setHeader('Content-Type', 'text/plain')
  res.end(http.STATUS_CODES[404] + '\n')
});

router.post('/create', function(req, res) {
  const reqUrl = url.parse(req.url);
  const queryMap = converUrlQueryToMap(reqUrl.query);
  
  if (queryMap.has('url')) {
    urlDatabase.set(
      urlDatabase.size,
      queryMap.get('url')
    );
    console.log(urlDatabase);
    const shortenedUrl = `http://localhost:8080/short?index=${urlDatabase.size - 1}`;

    res.end(shortenedUrl);
  } else {
    throw new Error('Long URL is not provided.')
  }
});

router.get('/short', function(req, res) {
  const reqUrl = url.parse(req.url);
  const queryMap = converUrlQueryToMap(reqUrl.query);
  const queryIndex = Number(queryMap.get('index'));

  if (queryIndex.toString() &&
      urlDatabase.has(queryIndex)
      ) {
    res.writeHead(302, {
      'location': urlDatabase.get(queryIndex),
      'Content-Type': 'text/html'
    });
    res.end('The shortened url has been unfolded');
  } else {
    throw new Error('Index does not exist in database');
  }
});

// use curl [URL] -I(to see response) -L(to redirect)

const server = http.createServer(function (req, res) {

  router.dispatch(req, res)
})

// PORT > 1024
server.listen(8080);


// helper function
function converUrlQueryToMap(urlQuery) {
  const valuePairArray =  urlQuery.split('&').reduce((accumulator, currentValue) => {
    const valuePair = currentValue.split('=');
    accumulator.push(valuePair);
    return accumulator;
  }, []);
  return new Map(valuePairArray);
}