const express = require('express');
const path = require('path');

const app = express();

const buildPath = path.resolve('./build');
const port = 3000;

app.use(express.static(buildPath));
app.get('*', (req, res) => {
  res.sendFile(`${buildPath}/index.html`);
});
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
