const server = require('./server')
const request = require('supertest')
const db = require('../data/dbConfig')


beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  
  beforeEach(async () => {
    await db.seed.run()
  })
  
  afterAll(async () => {
    await db.destroy()
  })

  describe('[GET] /hobbits', () => {
    test('responds with all the hobbits', async () => {
      const res = await request(server).get('/hobbits')
      expect(res.status).toBe(200)
    })
})

describe('[GET] /hobbits/:id', () => {
    test('responds with sam', async () => {
      const res = await request(server).get('/hobbits/1')
      expect(res.body).toMatchObject({ id: 1, name: 'sam' })
    })
  })

  describe('[POST] /hobbits', () => {
    test('responds with new hobbit', async () => {
      const res = await request(server)
        .post('/hobbits').send({ name: 'bilbo' })
      // the correct shape comes back
      // YOU!
    })
    test('responds with status 201', async () => {
  
    })
  })
