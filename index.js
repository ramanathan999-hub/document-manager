const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('My Document Manager is running! 🎉');
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});