// calling all of the required dependencies
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

// implementing the dependencies
const app = express();
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;
const allowedOrigins = ['https://phwanyayanga.onrender.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // If you are handling cookies or tokens
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Export client for use in routes
module.exports.client = client;

// function to connect to the database
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    const secondaryDb = client.db('phwanya-yanga'); // Specify the secondary database name
    await secondaryDb.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Set up your routes after a successful connection
    const dynamicRoutes = require('./routes/crudRoutes');
    app.use('/api/crud', dynamicRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process with failure code
  }
}

run().catch(error => {
  console.error("Unexpected error:", error);
  process.exit(1); // Exit the process with failure code
});

// Global error handler for unexpected errors
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});
