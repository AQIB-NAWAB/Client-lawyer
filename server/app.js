const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path")
const cors=require("cors")


//config// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}
const corsOptions = {
  origin: 'https://attorney-ease.vercel.app',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports

const user = require('./routes/userRoute');

app.use('/',user);



// middlewarre for errors
app.use(errorMiddleware);

module.exports = app;
// 01:08:47
