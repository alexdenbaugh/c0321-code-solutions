const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).send({ error: 'An unexpected error occured.' });
    });
});

const jsonRequest = express.json();
app.use(jsonRequest);

// app.post('/api/grades', (req, res) => {
//   const sql = `
//     insert into "grades" ("name, "course", "score")
//     values ($1, $2)
//     returning *
//   `;
//   const params = req.body
//   // console.log(params)
//   return
// })
