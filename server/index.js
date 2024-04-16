const express = require("express");
const db = require("./config/databse");
const apiRoutes = require("./routes/api");
const cors = require("cors");

const app = express(); // Initialize the Express app first

// Connect to MongoDB
db.connect();

// Middleware
app.use(express.json());

// Enable CORS for all origins
app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.use("/api", apiRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
