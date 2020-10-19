const { expect } = require('chai');
const request = require('supertest');
const { Artist } = require('../src/models/index.js');
const app = require('../src/app');

describe('/artists', () => {
  before(async () => {
    try {
      await Artist.sequelize.sync();
    } catch (err) {
      console.log(err);
    }
  });

  beforeEach(async () => {
    try {
      await Artist.destroy({ where: {} });
    } catch (err) {
      console.log(err);
    }
  });

  describe('POST /artists', async () => {
    it('creates a new artist in the database', async () => {
      const response = await request(app).post('/artists').send({
        name: 'Tame Impala',
        genre: 'Rock',
      });

      await expect(response.status).to.equal(201);
    });
  });

describe('with artists in the database', () => {
  let artists;
  beforeEach((done) => {
    Promise.all([
      Artist.create({ name: 'Tame Impala', genre: 'Rock' }),
      Artist.create({ name: 'Kylie Minogue', genre: 'Pop' }),
      Artist.create({ name: 'Dave Brubeck', genre: 'Jazz' }),
    ]).then((documents) => {
      artists = documents;
      done();
    });
  });

  describe('GET /artists', () => {
    it('gets all artist records', (done) => {
      request(app)
        .get('/artists')
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body.length).to.equal(3);
          res.body.forEach((artist) => {
            const expected = artists.find((a) => a.id === artist.id);
            expect(artist.name).to.equal(expected.name);
            expect(artist.genre).to.equal(expected.genre);
          });
          done();
        });
    });
  });

});
});