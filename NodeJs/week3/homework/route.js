/**
 * @param {string} path path name
 * @param {string} method http method, e.g. GET, POST
 * @param {function} callback callback function
 */

class Route {
  constructor(path, method, callback) {
    this.path = path;
    this.method = method,
    this.callback = callback
  }
}

module.exports = Route