// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const { add } = require('./stringCalculator');

const app = express();
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  try {
    const result = add(req.body.numbers);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
