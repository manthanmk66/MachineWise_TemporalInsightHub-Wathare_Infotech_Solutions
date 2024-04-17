const express = require("express");
const db = require("./config/databse");
const apiRoutes = require("./routes/api");
const cors = require("cors");

const app = express(); 

// Connect to MongoDB for Data
db.connect();

// Middleware
app.use(express.json());

// CORS Setup
app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.use("/api", apiRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
