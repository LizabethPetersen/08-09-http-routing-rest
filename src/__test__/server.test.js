'use strict';

describe('testing to see if I am connected to TravisCI', () => {
  test('should equal true', () => {
    expect(true).toEqual(true);
  });
});

// const superagent = require('superagent');
// const server = require('../lib/server');
// const Moto = require('../model/build-moto');

// const apiUrl = 'http://localhost:5000/api/vi/motorcycles';
// 
// const mockMoto = {
// user: 'test user',
// make: 'test make',
// };
// 
// beforeAll(() => server.start(5000));
// afterAll(() => server.stop());
// 
// describe('POST to /api/v1/motorcycles', () => {
// test('200 for successful saving of newly built moto', () => {
// return superagent.post(apiUrl)
// .send(mockMoto)
// .then((response) => {
// expect(response.body.user).toEqual(mockMoto.user);
// expect(response.body.make).toEqual(mockMoto.make);
// expect(response.body._id).toBeTruthy();
// expect(response.status).toEqual(200);
// })
// .catch((err) => {
// throw err;
// });
// });
// 
// test('400 for Bad Request', () => {
// return superagent.post(apiUrl)
// .send({})
// .then((response) => {
// throw response;
// })
// .catch((err) => {
// expect(err.status).toEqual(400);
// expect(err).toBeInstanceOf(Error);
// });
// });
// });

// describe('GET /api/v1/motorcycles', () => {
// let mockResourceForGet;
// beforeEach(() => {
// const newMoto = new Moto(mockMoto);
// newMoto.save()
// .then((moto) => {
// mockResourceForGet = moto;
// })
// .catch((err) => {
// throw err;
// });
// });
// 
// test('200 Successful GET Request', () => {
// return superagent.get(`${apiUrl}?id=${mockResourceForGet._id}`)
// .then((response) => {
// expect(response.status).toEqual(200);
// expect(response.body.user).toEqual(mockResourceForGet.user);
// expect(response.body.make).toEqual(mockResourceForGet.make);
// expect(response.body.createdOn).toEqual(mockResourceForGet.createdOn);
// })
// .catch((err) => {
// throw err;
// });
// });
// });
