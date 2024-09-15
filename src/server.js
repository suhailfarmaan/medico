const express = require("express");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
