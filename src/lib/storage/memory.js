'use strict';

const logger = require('../logger');

const storage = module.exports = {};

const memory = {};

storage.save = (schema, item) => {
  return new Promise((resolve, reject) => {
    if (!schema) return reject(new Error('Cannot create a new item, schema required.'));
    if (!item || !item.user) return reject(new Error('Cannot create a new item. User or make required.'));

    if (!memory[schema]) memory[schema] = {};
    memory[schema][item._id] = item;
    logger.log(logger.INFO, `STORAGE: Created a new resource ${JSON.stringify(item)}`);
    return resolve(item);
  });
};

storage.get = (schema, _id) => {
  if (memory[schema][_id]) {
    logger.log(logger.INFO, `STORAGE: Fetching ${JSON.stringify(memory[schema][_id], null, 2)}`);
    return Promise.resolve(memory[schema][_id]);
  }
  return Promise.reject(new Error(`${_id} not found`));
};
