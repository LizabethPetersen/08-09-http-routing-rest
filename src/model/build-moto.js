'use strict';

const uuid = require('uuid/v4');
const storage = require('../storage');

module.exports = class Moto {
  constructor(config) {
    this._id = uuid();
    this.createdOn = new Date().toISOString;
    this.user = config.user;
    this.make = config.make;
    this.model = config.model;
    this.year = config.year;
    this.desc = config.desc;
  }
  save() {
    return storage.save('Moto', this);
  }
  // static fetchAll() {
  // return storage.get();
  // }
  
  static findOne(_id) {
    return storage.get('Moto', _id);
  }
  static updateOne(_id) {
    return storage.put('Moto', _id);
  }
  static deleteOne(_id) {
    return storage.delete('Moto', _id);
  }
};
