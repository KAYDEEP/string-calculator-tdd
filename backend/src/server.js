const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: 'https://calculator-tdd-frontend.vercel.app', // Frontend URL
  methods: ['GET', 'POST'], // Add more methods if required
  allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers if needed
    credentials: true, // Allow credentials if needed
  preflightContinue: false, // Pass the response to the next handler (default false)
  optionsSuccessStatus: 200, // For legacy browsers (older versions of IE)
};

app.use(cors(corsOptions));

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
