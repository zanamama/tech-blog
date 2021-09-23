require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const sequielize = require("./config/connection");
const routes = require("./controllers");

const PORT = process.env.PORT || 3001;

app.use(routes);