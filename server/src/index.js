const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

// Routes
const login = require("./routes/auth/login");
const register = require("./routes/auth/register");

const main = async () => {
  const app = express();

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://hackathon-account-aggregator.vercel.app",
        "https://account-aggregator.vercel.app",
      ],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(bodyParser.json());

  mongoose.connect(
    "mongodb+srv://geoffrey:hack1112@account-aggregator.n7syp3c.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  app.use("/auth/login", login);
  app.use("/auth/register", register);
  app.use("/user", require("./routes/Account"));

  app.get("/", (req, res) => {
    res.send("Welcome To Account Aggregator API!");
  });

  app.listen(process.env.PORT || 3002, () => {
    console.log("App listening on port 3000!");
  });
};

main();
