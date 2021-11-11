const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

test('is testing environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

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

describe('Hobbit model', /* NO ASYNC HERE!!! */ () => {
  describe('getAll()', () => {
    test('resolves all hobbits in the db', async () => {
      const data = await Hobbit.getAll()
      expect(data.length).toBe(4)
      expect(data).toHaveLength(4)
    })
    test.todo('resolves the correct shapes')
  })
  describe('getById()', () => {

  })
  describe('insert()', () => {

  })
})
