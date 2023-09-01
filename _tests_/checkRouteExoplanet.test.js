/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../app.js')

// test route add with supertest
describe('register test', () => {
  it('should be return status code 200', () => {
    request(app)
      .get('/register')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err
      })
  })
})
