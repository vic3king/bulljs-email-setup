import request from 'supertest';
import app from '../../server/app';

describe('HOMEPAGE', () => {
  it('should respond with welcome message', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        done();
      });
  });

  it('should respond with invalid route error', done => {
    request(app)
      .get('/thisisaninvalidroute')
      .end((err, res) => {
        expect(res.statusCode).toEqual(404);
        done();
      });
  });
});
