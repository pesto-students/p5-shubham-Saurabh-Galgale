const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config()
const port = process.env.PORT || 5000;

const { connectDB } = require("./config/conn");
connectDB();

const userRoutes = require("./routes/routes");

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => res.send({ status: "API running!" }));

app.use("/", userRoutes);

app.listen(port, () => console.log(`Server started on PORT ${port}`));