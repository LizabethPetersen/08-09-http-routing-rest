'use strict';

const logger = require('./logger');
const bodyParser = require('./body-parser');
const customResponse = require('./custom-response');

module.exports = class Router {
  constructor() {
    this.routes = {
      GET: {
        '/api/v1/motorcycles': (request, response) => {},
        '/api/v1/motorcycles?id': (request, response) => {},
      },
      POST: {},
      PUT: {},
      DELETE: {},
    };
  }
  get(endpoint, callback) {
    this.routes.GET[endpoint] = callback;
  }
  post(endpoint, callback) {
    this.routes.POST[endpoint] = callback;
  }
  put(endpoint, callback) {
    this.routes.PUT[endpoint] = callback;
  }
  delete(endpoint, callback) {
    this.routes.DELETE[endpoint] = callback;
  }

  route() {
    return (request, response) => {
      Promise.all([bodyParser(request)])
        .then(() => {
          const requestResponseCallback = this.routes[request.method][request.url.pathname];
          const isFunction = typeof requestResponseCallback === 'function';
          if (isFunction) return requestResponseCallback(request, response);

          customResponse.sendError(response, 404, 'Route Not Registered');
          return undefined;
        })
        .catch((err) => {
          logger.log(logger.INFO, JSON.stringify(err));
          customResponse.sendError(response, 400, 'Route Not Found');
          return undefined;
        });
    };
  }
};
