const jsonObject = require('./data.json');
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const k in jsonObject.notes) {
    jsonArray.push(jsonObject.notes[k]);
  }
  res.status(200).send(jsonArray);
});
