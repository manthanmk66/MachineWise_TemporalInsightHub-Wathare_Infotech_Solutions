const express = require("express");
const router = express.Router();
const DataModel = require("../models/data");

// GET request handler to fetch data
router.get("/data", async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST request handler to add data
router.post("/data", async (req, res) => {
  try {
    const newData = req.body; // Assuming the request body contains the data to be saved
    const createdData = await DataModel.create(newData);
    res.status(201).json(createdData);
    console.log("Data Inserrted SuccesFully");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
