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

app.post('/api/grades', (req, res) => {
  req.body.score = parseInt(req.body.score, 10);
  if (!req.body.name || !req.body.course || !req.body.score || !Number.isInteger(req.body.score) || req.body.score < 1 || req.body.score > 100) {
    res.status(400).send({ error: "invalid 'grade'. Please insure that 'score' is an integer between 1-100 and the following format is used: name=Joe course=math score= 90" });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(201).send(result.rows[0]);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).send({ error: 'An unexpected error ocurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  req.body.score = parseInt(req.body.score, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).send({ error: "'gradeId' must be a positive integer" });
    return;
  } else if (!req.body.name || !req.body.course || !req.body.score || !Number.isInteger(req.body.score) || req.body.score < 1 || req.body.score > 100) {
    res.status(400).send({ error: "invalid 'grade' parameters. Please insure that 'score' is an integer between 1-100 and the following format is used: name=Joe course=math score= 90" });
    return;
  }
  const sql = `
    update "grades"
       set "name"      = $1,
           "course"    = $2,
           "score"      = $3
     where "gradeId"   = $4
     returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score, gradeId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).send({ error: "'gradeId' does not exist" });
      }
      res.status(200).send(result.rows[0]);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).send({ error: 'An unexpected error ocurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).send({ error: "'gradeId' must be a positive integer" });
    return;
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).send({ error: "'gradeId' does not exist" });
      }
      res.sendStatus(204);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).send({ error: 'An unexpected error ocurred' });
    });
});
