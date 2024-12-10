// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { add } = require('./stringCalculator');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/add', (req, res) => {
  try {
    const result = add(req.body.numbers);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

