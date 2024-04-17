const DataModel = require("../models/data");


exports.getData = async (req, res) => {
  try {
    // Fetch data from MongoDB using Mongoose model
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
