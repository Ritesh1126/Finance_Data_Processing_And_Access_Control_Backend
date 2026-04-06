const express = require("express");

const authRouter = require("./routes/auth.routes");

const app = express();  // we have export this app to use in other file like server.js 

app.use(express.json());

app.use("/api/auth", authRouter);


module.exports = app; // exporting the app 