const http = require('http');
const url = require('url');
const Route = require('./route');

class Router {
  constructor (notFoundFn) {
    if (typeof notFoundFn !== 'function') throw new Error('notFoundFn must be function')

    this.notFoundFn = notFoundFn;
    this.routes = [];
  }

  get (path, fn) {
    this.validateRoute(path, fn);

    this.routes.push(new Route(path, 'GET', fn));
  }

  post (path, fn) {
    this.validateRoute(path, fn);

    this.routes.push(new Route(path, 'POST', fn));
  }

  delete (path, fn) {
    this.validateRoute(path, fn);

    this.routes.push(new Route(path, 'DELETE', fn));
  }

  put (path, fn) {
    this.validateRoute(path, fn);

    this.routes.push(new Route(path, 'PUT', fn));
  }

  validateRoute(path, fn) {
    if (typeof path !== 'string') throw new Error('path must be string')

    if (typeof fn !== 'function') throw new Error('fn must be function')
  }

  handleServerError(req, res) {
    if (!(req instanceof http.IncomingMessage)) throw new Error('req must be IncomingMessage');

    if (!(res instanceof http.ServerResponse)) throw new Error('req must be ServerReponse');
  }

  dispatch(req, res) {
    this.handleServerError(req, res);
    console.log(req.method);

    const reqUrl = url.parse(req.url, true);
    const hasPath = this.routes.some(route => route.method === req.method && route.path === reqUrl.pathname);

    if (hasPath) {
      const handlerFn = (this.routes.find(route => route.method === req.method && route.path === reqUrl.pathname)).callback;

      handlerFn(req, res);
    } else {
      this.notFoundFn(req, res)
    }

    // if (super.has(reqUrl.pathname)) {
    //   var handlerFn = super.get(reqUrl.pathname)
    //   console.log(handlerFn.toString());
    //   handlerFn(req, res)
    //   return
    // } 
    
  }
}

module.exports = Router
