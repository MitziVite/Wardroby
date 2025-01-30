import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI; // Make sure to define this variable in your .env file

// Verify that MONGODB_URI is defined
if (!MONGODB_URI) {
  throw new Error('❌ MONGODB_URI is not defined in the .env file');
}

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
let db;
MongoClient.connect(MONGODB_URI)
  .then(client => {
    db = client.db('Wardroby');
    console.log('✅ Connected to MongoDB');
  })
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Wardroby API!');
});

app.get('/check-db', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ message: '❌ Not connected to the database' });
    }

    // Try to list collections as a test
    const collections = await db.listCollections().toArray();
    res.status(200).json({ message: '✅ Successful connection', collections });
  } catch (error) {
    res.status(500).json({ message: '❌ Error accessing the database', error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});