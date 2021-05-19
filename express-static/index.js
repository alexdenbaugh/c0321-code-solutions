const express = require('express');
const path = require('path');

console.log(express, path);

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

const publicPath = path.join(__dirname, 'public');
console.log(publicPath);

const middleware = express.static(publicPath);
app.use(middleware);
