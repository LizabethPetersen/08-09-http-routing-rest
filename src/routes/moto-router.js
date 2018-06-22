'use strict';

const Moto = require('../model/build-moto');
const logger = require('../lib/logger');
const customResponse = require('../lib/response');

module.exports = (router) => {
  router.post('/api/v1/motorcycles', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-NOTE: POST /api/v1/motorcycles');
    const newMoto = new Moto(request.body);
    newMoto.save()
      .then((motoBuilt) => {
        customResponse.sendJSON(response, 200, motoBuilt);
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
      .then((moto1) => {
        customResponse.sendJSON(response, 200, moto1);
      })
      .catch((err) => {
        console.log(err);  // eslint-disable-line
        customResponse.sendError(response, 400, err.message);
      });
    return undefined;
  });
};
