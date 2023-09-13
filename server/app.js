const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path")


//config// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports

const user = require('./routes/userRoute');


app.use('/api/v1',user);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// middlewarre for errors
app.use(errorMiddleware);

module.exports = app;
// 01:08:47
