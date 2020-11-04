require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

var url = process.env.DATABASE_URL;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server Started"));
