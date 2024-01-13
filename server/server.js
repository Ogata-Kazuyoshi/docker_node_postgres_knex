// expressのセットアップ
const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('./knexIndex');

const setupServer = () => {
  const app = express();
  app.use(cors());

  app.use(express.json());

  // app.use(express.static('./dist/'));
  //   app.use('/', express.static(path.join(__dirname, '../client/dist')));

  app.get('/', (req, res) => {
    res.send('hello-nodejs!!!');
  });
  //   app.get('/main', (req, res) => {
  //     res.redirect('/');
  //   });
  //
  app.get('/api/v1/data', async (req, res) => {
    const data = await knex('users').select();
    res.status(200).send(data);
  });

  return app;
};

module.exports = { setupServer };
