const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Fmessage = require('../lib/models/FMessage');

// /GET--retrieve from third party api

// -----DUMMY DATA-----

// /POST--

// /PUT--

// /DELETE--

describe('04_middleware-service-layer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // afterAll(() => {
  //   pool.end();
  // });

  it.only('creates a new entry', () => {
    return request(app)
      .post('/api/v1/orders')
      .send({ messenger: 'aemilius', funny: true })
      .then((res) => {
        expect(res.body).toEqual({ id: 4, messenger: 'aemilius', funny: true });
      });
  });

  it('should return all entries', async () => {
    const order = await Fmessage.insert({ messenger: 'aemilius', funny: true });
    return request(app)
      .get('/api/v1/orders')
      .then((res) => {
        expect(res.body).toEqual([order]);
      });
  });

  it('should return an entry by id', async () => {
    const order = await Fmessage.insert({ messenger: 'aemilius', funny: true });
    return request(app)
      .get(`/api/v1/orders/${order.id}`)
      .then((res) => {
        expect(res.body).toEqual(order);
      });
  });

  it('should update an entry', async () => {
    const order = await Fmessage.insert({ messenger: 'aemilius', funny: true });
    return request(app)
      .put(`/api/v1/orders/${order.id}`)
      .send({ funny: false })
      .then((res) => {
        expect(res.body).toEqual({
          id: 4,
          messenger: 'aemilius',
          funny: false,
        });
      });
  });

  it('should delete an entry', async () => {
    const order = await Fmessage.insert({ messenger: 'aemilius', funny: true });
    return request(app)
      .delete(`/api/v1/orders/${order.id}`)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });
});
