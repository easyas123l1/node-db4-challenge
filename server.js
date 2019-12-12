const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./recipe/recipe-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipe", RecipeRouter);

module.exports = server;
