const express = require('express');
const morgan = require('morgan');
const router = require("./routes");
const bodyParser = require("body-parser")
const cors = require("cors");
const createdAdminAccount = require("./scripts/admin")
const signUpRoute = require("./routes/index")


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

createdAdminAccount();

app.use(router);
app.use("/user", signUpRoute)

module.exports = app;