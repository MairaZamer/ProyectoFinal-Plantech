const express = require('express');
const morgan = require('morgan');
const router = require("./routes");
const cors = require("cors");

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(router);

module.exports = app;