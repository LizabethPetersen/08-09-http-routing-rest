'use strict';

// describe('testing to see if I am connected to TravisCI', () => {
// test('should equal true', () => {
// expect(true).toEqual(true);
// });
// });

const superagent = require('superagent');
const server = require('../lib/server');
const Moto = require('../model/build-moto');

const apiUrl = 'http://localhost:5000/api/vi/motorcycles';

const mockMoto = {
  user: 'test.user',
  model: 'test.model',
};

beforeAll(() => server.start(5000));
afterAll(() => server.stop());

describe('POST to /api/v1/motorcycles', () => {
  test('200 for successful saving of newly built moto', () => {
    return superagent.post(apiUrl)
      .send(mockMoto)
      .then((response) => {
        expect(response.body.user).toEqual(mockMoto.user);
        expect(response.body.model).toEqual(mockMoto.model);
        expect(response.body._id).toBeTruthy();
        expect(response.status).toEqual(200);
      })
      .catch((err) => {
        throw err;
      });
  });
});
