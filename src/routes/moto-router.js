'use strict';

const Moto = require('../model/build-moto');
const logger = require('../lib/logger');
const customResponse = require('../lib/custom-response');

module.exports = (router) => {
    router.post('/api/v1/motorcycles', request, response) => {
        logger.log(logger.INFO, 'ROUTE-NOTE: POST /api/v1/motorcycles');
        const newMoto = new Moto(request.body);
        newMoto.save()
        .then((moto) => {
            customResponse.sendJSON(response, 200, moto);
            return undefined;
        })
    }
}