const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/********************* Use Frontend CROS error fix***************************/
var allowedOrigins = process.env.Client_URL;

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
/******************************************************************************/
module.exports = app;
