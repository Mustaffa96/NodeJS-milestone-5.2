require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());

// Compression middleware
app.use(compression());

// Parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Node.js Cloud App!',
    endpoints: {
      root: '/',
      health: '/health',
      api: '/api'
    }
  });
});

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Node.js Cloud App!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
