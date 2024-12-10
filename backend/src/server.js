const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'OPTIONS'], // Allow methods
  allowedHeaders: ['Content-Type'], // Allow headers
}));

// Parse JSON bodies
app.use(express.json());

// Example API endpoint
app.post('/api/add', (req, res) => {
  const { numbers } = req.body;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  res.json({ sum });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
