'use strict';

const uuid = require('uuid/v4');
const storage = require('../storage');

module.exports = class Moto {
  constructor(config) {
    this._id = uuid();
    this.createdOn = new Date().toISOString;
    this.make = config.make;
    this.model = config.model;
    this.year = config.year;
  }
  save() {
    return storage.save('Motos', this);
  }
};
