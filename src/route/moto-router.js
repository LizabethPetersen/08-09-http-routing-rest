'use strict';

const Moto = require('../model/build-moto');
const logger = require('../lib/logger');
const customResponse = require('../lib/response');

module.exports = (router) => {
  router.post('/api/v1/motorcycles', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-NOTE: POST /api/v1/motorcycles');
    const newMoto = new Moto(request.body);
    newMoto.save()
      .then((moto) => {
        customResponse.sendJSON(response, 200, moto);
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.INFO, `ROUTE NOTE: There was a bad request ${JSON.stringify(err.message)}`);
        customResponse.sendError(response, 400, err.message);
        return undefined;
      });
  });

  router.get('/api/v1/motorcycles', (request, response) => {
    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires and ID');
      return undefined;
    }
    Moto.findOne(request.url.query.id)
      .then((moto) => {
        customResponse.sendJSON(response, 200, moto);
      })
      .catch((err) => {
        customResponse.sendError(response, 400, err.message);
      });
    return undefined;
  });

  router.delete('/api/v1/motorcycles', (request, response) => {
    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an ID');
      return undefined;
    }
    Moto.findOneAndDelete(request.url.query.id)
      .then((moto) => {
        customResponse.sendJSON(response, 204, moto);
      })
      .catch((err) => {
        customResponse.sendError(response, 400, err.message);
      });
    return undefined;
  });
};

