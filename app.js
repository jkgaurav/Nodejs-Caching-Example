const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Caching Example!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app; // For potential testing
