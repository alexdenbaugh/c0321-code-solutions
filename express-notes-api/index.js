const data = require('./data.json');
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const k in data.notes) {
    jsonArray.push(data.notes[k]);
  }
  res.status(200).send(jsonArray);
});

app.get('/api/notes/:id', (req, res) => {
  const response = {};
  if (!Number.isInteger(Number(req.params.id)) || Number(req.params.id) <= 0) {
    response.error = 'id must be a positive integer';
    res.status(400).send(response);
  } else if (data.notes[req.params.id]) {
    res.status(200).send(data.notes[req.params.id]);
  } else {
    response.error = `cannot find note with id ${req.params.id}`;
    res.status(404).send(response);
  }
});

const jsonRequest = express.json();
app.use(jsonRequest);

const fs = require('fs');

app.post('/api/notes', (req, res) => {
  const response = {};
  if (!req.body.content) {
    response.error = 'content is a required field';
    res.status(400).send(response);
  } else {
    data.notes[`${data.nextId}`] = {};
    data.notes[`${data.nextId}`].id = data.nextId;
    data.notes[`${data.nextId}`].content = req.body.content;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).send(data.notes[`${data.nextId - 1}`]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (!Number.isInteger(Number(req.params.id)) || Number(req.params.id) <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id]) {
    delete data.notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}.` });
  }
});
