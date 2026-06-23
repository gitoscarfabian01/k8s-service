const request = require('supertest');
const app = require('./app');

describe('Microservice API', () => {
  test('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/items returns list', async () => {
    const res = await request(app).get('/api/items');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(3);
  });

  test('GET /api/items/:id returns item', async () => {
    const res = await request(app).get('/api/items/1');
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Item A');
  });

  test('GET /api/items/:id returns 404 for missing item', async () => {
    const res = await request(app).get('/api/items/99');
    expect(res.status).toBe(404);
  });
});
