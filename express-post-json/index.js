const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const k in grades) {
    array.push(grades[k]);
  }
  res.json(array);
});

const jsonRequest = express.json();

app.use(jsonRequest);
app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send('post successful');
});
