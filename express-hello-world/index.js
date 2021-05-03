const express = require('express');
const app = express();

app.use((req, res) => {
  res.send("I'm Listening...");
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
