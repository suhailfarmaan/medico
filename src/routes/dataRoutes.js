const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const router = express.Router();
const dataFilePath = path.join(__dirname, "../../data/data.json");

router.get("/data", async (req, res) => {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    const parsedData = JSON.parse(data); 
    res.json(parsedData); 

  } catch (error) {
    console.error("Error reading the data file:", error);
    if (!res.headersSent) {
      res.status(500).send("Internal Server Error");
    }
  }
});

module.exports = router;
