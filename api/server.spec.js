const server = require('./server');
const request = require('supertest');

describe('server', () => {
	describe('GET / endpoint', () => {
		it('is the right enviroment', () => {
			expect(process.env.DB_ENV).toBe('testing');
		});
		it('returns the right response body', () => {
			const expectedResponseBody = JSON.stringify({ api: 'up' });
			return request(server)
				.get('/')
				.expect(expectedResponseBody)
				.expect('Content-Length', expectedResponseBody.length.toString()); // testing headers
		});
		it('returns the right response body if name is qstring', () => {
			const expectedResponseBody = JSON.stringify({ api: 'Welcome, Samar' });
			return request(server).get('/?name=Samar').expect(expectedResponseBody);
		});
		// it('returns the right response body if name is qstring', () => {
		//     const expectedResponseBody = JSON.stringify({ api: 'Welcome, Samar' });
		//     return request(server).get('/').expect(expectedResponseBody);
		// });
		it('GET /hobbits endpoint', () => {
			return request(server).get('/hobbits').expect(200);
		});

		it('responses with proper status code', async () => {
			const res = await request(server).get('/hobbits');
			expect(res.body).toHaveLength(0);
		});

		it('responses with proper status code', () => {
			return request(server).get('/hobbits').then((res) => {
				expect(res.body).toHaveLength(0);
			});
		});
	});

	describe('GET /hobbits endpoints', () => {});
});
