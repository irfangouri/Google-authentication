const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5678;

// Database connection
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URL, {
  dbName: DB_NAME,
}).then(() => console.log('Successfully connected with database'))
  .catch((err) => console.error('An error occurred while connecting, Error: ', err));

// Middlewares
app.use(express.json());
app.use(cors());

// Get request for testing
app.get('/', (req, res) => {
  res.send('hello world');
});

// Establishing server
app.listen(PORT, () => {
  console.log(`Successfully connected on PORT ${PORT}`);
});
